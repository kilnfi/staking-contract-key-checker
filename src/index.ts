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
const GENESIS_VALIDATOR_ROOT = Buffer.from('00'.repeat(32), 'hex');

const env = load({
    EXECUTION_LAYER_RPC: String,
    STAKING_CONTRACT_ADDRESS: String,
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
    const network = process.argv[2];
    const provider = new ethers.providers.JsonRpcProvider(
        env.EXECUTION_LAYER_RPC
    );
    const bn = await provider.getBlockNumber();
    console.log('Running key analysis at block', bn);

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
        lastOperator = await StakingContract.getOperator(operatorIndex);
        ++operatorIndex;
    } while (
        lastOperator.operatorAddress !==
        '0x0000000000000000000000000000000000000000'
    );

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
                    lastPublicKey =
                        '0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
                    continue;
                } else {
                    throw e;
                }
            }
            lastPublicKey = key.publicKey;
            const withdrawalAddress = await StakingContract.getCLFeeRecipient(
                key.publicKey
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
            const forkVersion: Buffer = FORK_VERSIONS[network];
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
        } while (
            lastPublicKey !=
            '0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
        );
    }
    if (hasInvalid) {
        process.exit(1);
    }
};

main();
