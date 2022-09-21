export default [
    {
        inputs: [],
        name: 'CallWhenPaused',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'previousAdmin',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'newAdmin',
                type: 'address',
            },
        ],
        name: 'AdminChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'beacon',
                type: 'address',
            },
        ],
        name: 'BeaconUpgraded',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'implementation',
                type: 'address',
            },
        ],
        name: 'Upgraded',
        type: 'event',
    },
    {
        stateMutability: 'payable',
        type: 'fallback',
    },
    {
        inputs: [],
        name: 'admin',
        outputs: [
            {
                internalType: 'address',
                name: 'admin_',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newAdmin',
                type: 'address',
            },
        ],
        name: 'changeAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'implementation',
        outputs: [
            {
                internalType: 'address',
                name: 'implementation_',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'isPaused',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'unpause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newImplementation',
                type: 'address',
            },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newImplementation',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        stateMutability: 'payable',
        type: 'receive',
    },
    {
        inputs: [],
        name: 'AlreadyInitialized',
        type: 'error',
    },
    {
        inputs: [],
        name: 'Deactivated',
        type: 'error',
    },
    {
        inputs: [],
        name: 'DepositFailure',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes',
            },
        ],
        name: 'DuplicateValidatorKey',
        type: 'error',
    },
    {
        inputs: [],
        name: 'Forbidden',
        type: 'error',
    },
    {
        inputs: [],
        name: 'FundedValidatorDeletionAttempt',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidArgument',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidCall',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidDepositValue',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidFee',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidPublicKeys',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidSignatures',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidValidatorCount',
        type: 'error',
    },
    {
        inputs: [],
        name: 'MaximumOperatorCountAlreadyReached',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NoOperators',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotEnoughValidators',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'limit',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'keyCount',
                type: 'uint256',
            },
        ],
        name: 'OperatorLimitTooHigh',
        type: 'error',
    },
    {
        inputs: [],
        name: 'Unauthorized',
        type: 'error',
    },
    {
        inputs: [],
        name: 'UnsortedIndexes',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_operatorIndex',
                type: 'uint256',
            },
        ],
        name: 'ActivatedOperator',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'newAdmin',
                type: 'address',
            },
        ],
        name: 'ChangedAdmin',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newGlobalFee',
                type: 'uint256',
            },
        ],
        name: 'ChangedGlobalFee',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'operatorIndex',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'operatorAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'feeRecipientAddress',
                type: 'address',
            },
        ],
        name: 'ChangedOperatorAddresses',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newOperatorFee',
                type: 'uint256',
            },
        ],
        name: 'ChangedOperatorFee',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'operatorIndex',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'limit',
                type: 'uint256',
            },
        ],
        name: 'ChangedOperatorLimit',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'newTreasury',
                type: 'address',
            },
        ],
        name: 'ChangedTreasury',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bytes',
                name: 'publicKey',
                type: 'bytes',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'newWithdrawer',
                type: 'address',
            },
        ],
        name: 'ChangedWithdrawer',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_operatorIndex',
                type: 'uint256',
            },
        ],
        name: 'DeactivatedOperator',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'caller',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'withdrawer',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'publicKey',
                type: 'bytes',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
            },
        ],
        name: 'Deposit',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'operatorAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'feeRecipientAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'NewOperator',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bool',
                name: '_status',
                type: 'bool',
            },
        ],
        name: 'SetWithdrawerCustomizationStatus',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'operatorIndex',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'publicKey',
                type: 'bytes',
            },
        ],
        name: 'ValidatorKeyRemoved',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'operatorIndex',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'publicKeys',
                type: 'bytes',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'signatures',
                type: 'bytes',
            },
        ],
        name: 'ValidatorKeysAdded',
        type: 'event',
    },
    {
        inputs: [],
        name: 'DEPOSIT_SIZE',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'PUBLIC_KEY_LENGTH',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'SIGNATURE_LENGTH',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_operatorIndex',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_newFeeRecipient',
                type: 'address',
            },
        ],
        name: 'activateOperator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_operatorAddress',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_feeRecipientAddress',
                type: 'address',
            },
        ],
        name: 'addOperator',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_operatorIndex',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_keyCount',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: '_publicKeys',
                type: 'bytes',
            },
            {
                internalType: 'bytes',
                name: '_signatures',
                type: 'bytes',
            },
        ],
        name: 'addValidators',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_operatorIndex',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_temporaryFeeRecipient',
                type: 'address',
            },
        ],
        name: 'deactivateOperator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'deposit',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getAdmin',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getAvailableValidatorCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_publicKey',
                type: 'bytes',
            },
        ],
        name: 'getCLFeeRecipient',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_publicKey',
                type: 'bytes',
            },
        ],
        name: 'getELFeeRecipient',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getGlobalFee',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_operatorIndex',
                type: 'uint256',
            },
        ],
        name: 'getOperator',
        outputs: [
            {
                internalType: 'address',
                name: 'operatorAddress',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'feeRecipientAddress',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'limit',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'keys',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'funded',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'available',
                type: 'uint256',
            },
            {
                internalType: 'bool',
                name: 'deactivated',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getOperatorFee',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'pubKeyRoot',
                type: 'bytes32',
            },
        ],
        name: 'getOperatorFeeRecipient',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getPendingAdmin',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getTreasury',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_operatorIndex',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_validatorIndex',
                type: 'uint256',
            },
        ],
        name: 'getValidator',
        outputs: [
            {
                internalType: 'bytes',
                name: 'publicKey',
                type: 'bytes',
            },
            {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
            },
            {
                internalType: 'address',
                name: 'withdrawer',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: 'funded',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_publicKey',
                type: 'bytes',
            },
        ],
        name: 'getWithdrawer',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_publicKeyRoot',
                type: 'bytes32',
            },
        ],
        name: 'getWithdrawerFromPublicKeyRoot',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_admin',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_treasury',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_depositContract',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_elDispatcher',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_clDispatcher',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_feeRecipientImplementation',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_globalFee',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_operatorFee',
                type: 'uint256',
            },
        ],
        name: 'initialize_1',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_operatorIndex',
                type: 'uint256',
            },
            {
                internalType: 'uint256[]',
                name: '_indexes',
                type: 'uint256[]',
            },
        ],
        name: 'removeValidators',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_globalFee',
                type: 'uint256',
            },
        ],
        name: 'setGlobalFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_operatorIndex',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_operatorAddress',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_feeRecipientAddress',
                type: 'address',
            },
        ],
        name: 'setOperatorAddresses',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_operatorFee',
                type: 'uint256',
            },
        ],
        name: 'setOperatorFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_operatorIndex',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_limit',
                type: 'uint256',
            },
        ],
        name: 'setOperatorLimit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_newTreasury',
                type: 'address',
            },
        ],
        name: 'setTreasury',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_publicKey',
                type: 'bytes',
            },
            {
                internalType: 'address',
                name: '_newWithdrawer',
                type: 'address',
            },
        ],
        name: 'setWithdrawer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: '_enabled',
                type: 'bool',
            },
        ],
        name: 'setWithdrawerCustomizationEnabled',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_newAdmin',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_publicKey',
                type: 'bytes',
            },
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_publicKey',
                type: 'bytes',
            },
        ],
        name: 'withdrawCLFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: '_publicKey',
                type: 'bytes',
            },
        ],
        name: 'withdrawELFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_logic',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'admin_',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        stateMutability: 'payable',
        type: 'constructor',
    },
];
