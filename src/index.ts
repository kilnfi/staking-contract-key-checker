import { ethers } from 'ethers';
import { init, verify } from '@chainsafe/bls';
import { ssz } from '@chainsafe/lodestar-types';
import {
    DepositMessage,
    ForkData,
    SigningData,
} from '@chainsafe/lodestar-types/lib/phase0/types';
import { DOMAIN_DEPOSIT } from '@chainsafe/lodestar-params';

import { load } from 'ts-dotenv';
import StakingContractAbi from './StakingContract.abi';

const FORK_VERSIONS: { [key: string]: Buffer } = {
    mainnet: Buffer.from('00000000', 'hex'),
    prater: Buffer.from('00001020', 'hex'),
    pyrmont: Buffer.from('00002009', 'hex'),
};

// Target EVM execution layer chain IDs
const EXPECTED_CHAIN_IDS: { [key: string]: number } = {
    mainnet: 1,
    prater: 5,
    pyrmont: 5,
};

const GENESIS_VALIDATOR_ROOT = Buffer.from('00'.repeat(32), 'hex');
const ZERO_ADDRESS = ethers.constants.AddressZero;
const ZERO_PUBLIC_KEY = '0x' + '00'.repeat(48);

const env = load({
    EXECUTION_LAYER_RPC: String,
    STAKING_CONTRACT_ADDRESS: String,
    NETWORK: String,
});

const initBls = async (): Promise<void> => {
    await init('herumi');
};

const generateForkData = (forkVersion: Buffer): ForkData => {
    return {
        currentVersion: forkVersion,
        genesisValidatorsRoot: GENESIS_VALIDATOR_ROOT,
    };
};

const generateDepositDomain = (forkVersion: Buffer): Buffer => {
    const forkData = generateForkData(forkVersion);

    return Buffer.concat([
        Buffer.from(DOMAIN_DEPOSIT),
        ssz.phase0.ForkData.hashTreeRoot(forkData).slice(0, 28),
    ]);
};

const main = async () => {
    await initBls();
    let hasInvalid = false;
    const network = env.NETWORK;

    // Fail fast on a misconfigured NETWORK fork version
    const forkVersion: Buffer = FORK_VERSIONS[network];
    const expectedChainId = EXPECTED_CHAIN_IDS[network];

    if (!forkVersion || !expectedChainId) {
        throw new Error(
            `Unsupported NETWORK "${network}". Expected one of: ${Object.keys(
                FORK_VERSIONS
            ).join(', ')}`
        );
    }

    const provider = new ethers.providers.JsonRpcProvider(
        env.EXECUTION_LAYER_RPC
    );

    // H-6 Remediation: Validate network chain ID against expected execution chain
    let detectedNetwork: ethers.providers.Network;
    try {
        detectedNetwork = await provider.getNetwork();
    } catch (err: any) {
        throw new Error(
            `Failed to connect to execution layer RPC at ${env.EXECUTION_LAYER_RPC}: ${err.message}`
        );
    }

    if (detectedNetwork.chainId !== expectedChainId) {
        throw new Error(
            `NETWORK MISMATCH ERROR: RPC node answered with chainId ${detectedNetwork.chainId} (${detectedNetwork.name}), but configured network is '${network}' (expected chainId ${expectedChainId}). Aborting to prevent invalid verification.`
        );
    }

    const bn = await provider.getBlockNumber();
    console.log(`Connected to ${detectedNetwork.name} (chainId ${detectedNetwork.chainId})`);
    console.log(`Running key analysis at block ${bn}`);

    const StakingContract = new ethers.Contract(
        env.STAKING_CONTRACT_ADDRESS,
        StakingContractAbi,
        provider
    );

    const operators = [];
    let lastOperator = null;
    let operatorIndex = 0;

    do {
        if (lastOperator !== null) {
            operators.push(lastOperator);
        }
        // Pin call to current block number to ensure state consistency
        lastOperator = await StakingContract.getOperator(operatorIndex, {
            blockTag: bn,
        });
        ++operatorIndex;
    } while (lastOperator.operatorAddress !== ZERO_ADDRESS);

    for (let idx = 0; idx < operators.length; ++idx) {
        const operator = operators[idx];
        let keyIdx = operator.funded.toNumber();
        let lastPublicKey = null;

        console.log();
        console.log(
            `starting key verification for operator ${idx} ${operator.operatorAddress}`
        );
        console.log(`limit=${operator.limit.toNumber()}`);
        console.log(`funded=${operator.funded.toNumber()}`);
        console.log(`available=${operator.available.toNumber()}`);
        console.log();

        do {
            let key;
            try {
                key = await StakingContract.getValidator(idx, keyIdx, {
                    blockTag: bn,
                });
            } catch (e: any) {
                if (e.errorName === 'Panic') {
                    lastPublicKey = ZERO_PUBLIC_KEY;
                    continue;
                } else {
                    throw e;
                }
            }

            lastPublicKey = key.publicKey;
            const withdrawalAddress = await StakingContract.getCLFeeRecipient(
                key.publicKey,
                { blockTag: bn }
            );

            const withdrawalCredentials = Buffer.from(
                `010000000000000000000000` + withdrawalAddress.slice(2),
                'hex'
            );
            const publicKey = Buffer.from(key.publicKey.slice(2), 'hex');
            const signature = Buffer.from(key.signature.slice(2), 'hex');

            const depositMessage: DepositMessage = {
                pubkey: publicKey,
                withdrawalCredentials: withdrawalCredentials,
                amount: 32000000000,
            };

            const depositDomain = generateDepositDomain(forkVersion);
            const signingData: SigningData = {
                objectRoot:
                    ssz.phase0.DepositMessage.hashTreeRoot(depositMessage),
                domain: depositDomain,
            };
            const signingDataRoot =
                ssz.phase0.SigningData.hashTreeRoot(signingData);

            const valid = verify(publicKey, signingDataRoot, signature);
            if (!valid) {
                console.log(
                    `INVALIDKEY ERROR: operator ${idx} has invalid key at index ${keyIdx}`
                );
                hasInvalid = true;
            } else {
                console.log(`key ${keyIdx} of operator ${idx} is valid`);
            }
            ++keyIdx;
        } while (lastPublicKey !== ZERO_PUBLIC_KEY);
    }

    if (hasInvalid) {
        process.exit(1);
    }
};

// Surface startup/runtime failures explicitly
main().catch((error) => {
    console.error('Key verification failed:', error.message || error);
    process.exit(1);
});
