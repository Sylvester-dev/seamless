/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ContractualNFT,
  ContractualNFTInterface,
} from "../ContractualNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "CompleteAndMint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfsHash",
        type: "string",
      },
    ],
    name: "CreateNewAgreement",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
    ],
    name: "approveAgreement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "ipfsHash",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "cptyAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "denied",
                type: "bool",
              },
            ],
            internalType: "struct ContractualNFT.Counterparty[]",
            name: "counterparties",
            type: "tuple[]",
          },
        ],
        internalType: "struct ContractualNFT.Agreement",
        name: "agreement",
        type: "tuple",
      },
    ],
    name: "checkIfComplete",
    outputs: [
      {
        internalType: "bool",
        name: "isComplete",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
    ],
    name: "completeAgreement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "counterpartyAddresses",
        type: "address[]",
      },
      {
        internalType: "string",
        name: "ipfsHash",
        type: "string",
      },
    ],
    name: "defineAgreement",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
    ],
    name: "disapproveAgreement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
    ],
    name: "getAgreement",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "ipfsHash",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "cptyAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "denied",
                type: "bool",
              },
            ],
            internalType: "struct ContractualNFT.Counterparty[]",
            name: "counterparties",
            type: "tuple[]",
          },
        ],
        internalType: "struct ContractualNFT.Agreement",
        name: "agreement",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getAgreementsForAddress",
    outputs: [
      {
        internalType: "uint256[]",
        name: "agreements",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600e81526d10dbdb9d1c9858dd1d585b13919560921b60208083019182528351808501909452600484526310d3d39560e21b908401528151919291620000649160009162000088565b5080516200007a90600190602084019062000088565b50506001600655506200016b565b82805462000096906200012e565b90600052602060002090601f016020900481019282620000ba576000855562000105565b82601f10620000d557805160ff191683800117855562000105565b8280016001018555821562000105579182015b8281111562000105578251825591602001919060010190620000e8565b506200011392915062000117565b5090565b5b8082111562000113576000815560010162000118565b600181811c908216806200014357607f821691505b602082108114156200016557634e487b7160e01b600052602260045260246000fd5b50919050565b6122e6806200017b6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806370a08231116100b85780639e6008491161007c5780639e6008491461029c578063a22cb465146102af578063b132d78b146102c2578063b88d4fde146102d5578063c87b56dd146102e8578063e985e9c5146102fb57600080fd5b806370a082311461024557806381de04dc146102665780638458cf8e146102795780638ada066e1461028c57806395d89b411461029457600080fd5b806340321f5e116100ff57806340321f5e146101cc57806342842e0e146101df5780634f9f6fe6146101f25780635314347e146102125780636352211e1461023257600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806323b872dd146101b9575b600080fd5b61014f61014a366004611cd1565b610337565b60405190151581526020015b60405180910390f35b61016c610389565b60405161015b9190611f30565b61018c610187366004611e3c565b61041b565b6040516001600160a01b03909116815260200161015b565b6101b76101b2366004611be2565b6104b5565b005b6101b76101c7366004611b05565b6105cb565b6101b76101da366004611e3c565b6105fc565b6101b76101ed366004611b05565b610719565b610205610200366004611e3c565b610734565b60405161015b9190611fe6565b610225610220366004611ab9565b61088f565b60405161015b9190611eec565b61018c610240366004611e3c565b6108fb565b610258610253366004611ab9565b610972565b60405190815260200161015b565b610258610274366004611c0b565b6109f9565b6101b7610287366004611e3c565b610be3565b600654610258565b61016c610ee5565b61014f6102aa366004611d09565b610ef4565b6101b76102bd366004611bb9565b610f89565b6101b76102d0366004611e3c565b61104e565b6101b76102e3366004611b40565b61116b565b61016c6102f6366004611e3c565b6111a3565b61014f610309366004611ad3565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061036857506001600160e01b03198216635b5e139f60e01b145b8061038357506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060008054610398906121f1565b80601f01602080910402602001604051908101604052809291908181526020018280546103c4906121f1565b80156104115780601f106103e657610100808354040283529160200191610411565b820191906000526020600020905b8154815290600101906020018083116103f457829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104995760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006104c0826108fb565b9050806001600160a01b0316836001600160a01b0316141561052e5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610490565b336001600160a01b038216148061054a575061054a8133610309565b6105bc5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610490565b6105c6838361128b565b505050565b6105d533826112f9565b6105f15760405162461bcd60e51b815260040161049090611f95565b6105c68383836113f0565b6000818152600760205260408120600101905b6000838152600760205260409020600101548110156105c657336001600160a01b031682828154811061065257634e487b7160e01b600052603260045260246000fd5b60009182526020909120600390910201546001600160a01b0316141561070757600082828154811061069457634e487b7160e01b600052603260045260246000fd5b906000526020600020906003020160020160006101000a81548160ff02191690831515021790555060018282815481106106de57634e487b7160e01b600052603260045260246000fd5b906000526020600020906003020160020160016101000a81548160ff0219169083151502179055505b8061071181612226565b91505061060f565b6105c68383836040518060200160405280600081525061116b565b604080518082019091526060808252602082015260008281526007602052604090819020815180830190925280548290829061076f906121f1565b80601f016020809104026020016040519081016040528092919081815260200182805461079b906121f1565b80156107e85780601f106107bd576101008083540402835291602001916107e8565b820191906000526020600020905b8154815290600101906020018083116107cb57829003601f168201915b5050505050815260200160018201805480602002602001604051908101604052809291908181526020016000905b82821015610881576000848152602090819020604080516080810182526003860290920180546001600160a01b031683526001808201548486015260029091015460ff8082161515938501939093526101009004909116151560608301529083529092019101610816565b505050915250909392505050565b6001600160a01b0381166000908152600860209081526040918290208054835181840281018401909452808452606093928301828280156108ef57602002820191906000526020600020905b8154815260200190600101908083116108db575b50505050509050919050565b6000818152600260205260408120546001600160a01b0316806103835760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610490565b60006001600160a01b0382166109dd5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610490565b506001600160a01b031660009081526003602052604090205490565b60068054600091819083610a0c83612226565b9091555050600081815260076020908152604090912084519091610a3491839187019061197d565b5060005b8551811015610b9f5760086000878381518110610a6557634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020839080600181540180825580915050600190039060005260206000200160009091909190915055816001016040518060800160405280888481518110610ae357634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b0390811683526006805484840152600060408086018290526060958601829052875460018082018a55988352858320885160039092020180546001600160a01b0319169190951617845593860151968301969096559184015160029091018054949093015161ffff1990941690151561ff0019161761010093151593909302929092179055805491610b8783612226565b91905055508080610b9790612226565b915050610a38565b507fbcafd6e1572c7df98bcc8e3ba53a340e1a72edf8105c67e3d2a71860cf5beb20828686604051610bd393929190612078565b60405180910390a1509392505050565b60008181526007602052604090819020815180830190925280549091610d3191839082908290610c12906121f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3e906121f1565b8015610c8b5780601f10610c6057610100808354040283529160200191610c8b565b820191906000526020600020905b815481529060010190602001808311610c6e57829003601f168201915b5050505050815260200160018201805480602002602001604051908101604052809291908181526020016000905b82821015610d24576000848152602090819020604080516080810182526003860290920180546001600160a01b031683526001808201548486015260029091015460ff8082161515938501939093526101009004909116151560608301529083529092019101610cb9565b5050505081525050610ef4565b610d7d5760405162461bcd60e51b815260206004820152601760248201527f41677265656d656e74206e6f7420636f6d706c6574652e0000000000000000006044820152606401610490565b60005b60018201548110156105c657610e0a826001018281548110610db257634e487b7160e01b600052603260045260246000fd5b60009182526020909120600390910201546001840180546001600160a01b039092169184908110610df357634e487b7160e01b600052603260045260246000fd5b906000526020600020906003020160010154611590565b7f1d9e760a0d1b261815a474aaa152eb098f4e92fb89ebd410204db2f71452cd0983836001018381548110610e4f57634e487b7160e01b600052603260045260246000fd5b60009182526020909120600390910201546001850180546001600160a01b039092169185908110610e9057634e487b7160e01b600052603260045260246000fd5b906000526020600020906003020160010154604051610ecb939291909283526001600160a01b03919091166020830152604082015260600190565b60405180910390a180610edd81612226565b915050610d80565b606060018054610398906121f1565b60008060005b836020015151811015610f635783602001518181518110610f2b57634e487b7160e01b600052603260045260246000fd5b6020026020010151604001511515600115151415610f515781610f4d81612226565b9250505b80610f5b81612226565b915050610efa565b50826020015151811415610f7a5750600192915050565b50600092915050565b50919050565b6001600160a01b038216331415610fe25760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610490565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000818152600760205260408120600101905b6000838152600760205260409020600101548110156105c657336001600160a01b03168282815481106110a457634e487b7160e01b600052603260045260246000fd5b60009182526020909120600390910201546001600160a01b031614156111595760018282815481106110e657634e487b7160e01b600052603260045260246000fd5b906000526020600020906003020160020160006101000a81548160ff021916908315150217905550600082828154811061113057634e487b7160e01b600052603260045260246000fd5b906000526020600020906003020160020160016101000a81548160ff0219169083151502179055505b8061116381612226565b915050611061565b61117533836112f9565b6111915760405162461bcd60e51b815260040161049090611f95565b61119d848484846115ae565b50505050565b6000818152600260205260409020546060906001600160a01b03166112225760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610490565b600061123960408051602081019091526000815290565b905060008151116112595760405180602001604052806000815250611284565b80611263846115e1565b604051602001611274929190611e80565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906112c0826108fb565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166113725760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610490565b600061137d836108fb565b9050806001600160a01b0316846001600160a01b031614806113b85750836001600160a01b03166113ad8461041b565b6001600160a01b0316145b806113e857506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316611403826108fb565b6001600160a01b03161461146b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610490565b6001600160a01b0382166114cd5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610490565b6114d860008261128b565b6001600160a01b03831660009081526003602052604081208054600192906115019084906121ae565b90915550506001600160a01b038216600090815260036020526040812080546001929061152f908490612182565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6115aa8282604051806020016040528060008152506116fb565b5050565b6115b98484846113f0565b6115c58484848461172e565b61119d5760405162461bcd60e51b815260040161049090611f43565b6060816116055750506040805180820190915260018152600360fc1b602082015290565b8160005b811561162f578061161981612226565b91506116289050600a8361219a565b9150611609565b60008167ffffffffffffffff81111561165857634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611682576020820181803683370190505b5090505b84156113e8576116976001836121ae565b91506116a4600a86612241565b6116af906030612182565b60f81b8183815181106116d257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506116f4600a8661219a565b9450611686565b611705838361183b565b611712600084848461172e565b6105c65760405162461bcd60e51b815260040161049090611f43565b60006001600160a01b0384163b1561183057604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611772903390899088908890600401611eaf565b602060405180830381600087803b15801561178c57600080fd5b505af19250505080156117bc575060408051601f3d908101601f191682019092526117b991810190611ced565b60015b611816573d8080156117ea576040519150601f19603f3d011682016040523d82523d6000602084013e6117ef565b606091505b50805161180e5760405162461bcd60e51b815260040161049090611f43565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506113e8565b506001949350505050565b6001600160a01b0382166118915760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610490565b6000818152600260205260409020546001600160a01b0316156118f65760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610490565b6001600160a01b038216600090815260036020526040812080546001929061191f908490612182565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b828054611989906121f1565b90600052602060002090601f0160209004810192826119ab57600085556119f1565b82601f106119c457805160ff19168380011785556119f1565b828001600101855582156119f1579182015b828111156119f15782518255916020019190600101906119d6565b506119fd929150611a01565b5090565b5b808211156119fd5760008155600101611a02565b600067ffffffffffffffff831115611a3057611a30612281565b611a43601f8401601f191660200161212d565b9050828152838383011115611a5757600080fd5b828260208301376000602084830101529392505050565b80356001600160a01b0381168114611a8557600080fd5b919050565b80358015158114611a8557600080fd5b600082601f830112611aaa578081fd5b61128483833560208501611a16565b600060208284031215611aca578081fd5b61128482611a6e565b60008060408385031215611ae5578081fd5b611aee83611a6e565b9150611afc60208401611a6e565b90509250929050565b600080600060608486031215611b19578081fd5b611b2284611a6e565b9250611b3060208501611a6e565b9150604084013590509250925092565b60008060008060808587031215611b55578081fd5b611b5e85611a6e565b9350611b6c60208601611a6e565b925060408501359150606085013567ffffffffffffffff811115611b8e578182fd5b8501601f81018713611b9e578182fd5b611bad87823560208401611a16565b91505092959194509250565b60008060408385031215611bcb578182fd5b611bd483611a6e565b9150611afc60208401611a8a565b60008060408385031215611bf4578182fd5b611bfd83611a6e565b946020939093013593505050565b60008060408385031215611c1d578182fd5b823567ffffffffffffffff80821115611c34578384fd5b818501915085601f830112611c47578384fd5b81356020611c5c611c578361215e565b61212d565b8083825282820191508286018a848660051b8901011115611c7b578889fd5b8896505b84871015611ca457611c9081611a6e565b835260019690960195918301918301611c7f565b5096505086013592505080821115611cba578283fd5b50611cc785828601611a9a565b9150509250929050565b600060208284031215611ce2578081fd5b813561128481612297565b600060208284031215611cfe578081fd5b815161128481612297565b60006020808385031215611d1b578182fd5b823567ffffffffffffffff80821115611d32578384fd5b81850191506040808388031215611d47578485fd5b611d4f6120e1565b833583811115611d5d578687fd5b611d6989828701611a9a565b8252508484013583811115611d7c578687fd5b80850194505087601f850112611d90578586fd5b83359250611da0611c578461215e565b8084825286820191508686018a888760071b8901011115611dbf578889fd5b8896505b85871015611e2957608080828d031215611ddb57898afd5b611de361210a565b611dec83611a6e565b8152898301358a820152611e01878401611a8a565b878201526060611e12818501611a8a565b908201528452600197909701969288019201611dc3565b5095820195909552979650505050505050565b600060208284031215611e4d578081fd5b5035919050565b60008151808452611e6c8160208601602086016121c5565b601f01601f19169290920160200192915050565b60008351611e928184602088016121c5565b835190830190611ea68183602088016121c5565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611ee290830184611e54565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611f2457835183529284019291840191600101611f08565b50909695505050505050565b6020815260006112846020830184611e54565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60006020808352606084516040808487015261200483870183611e54565b87850151878203601f1901838901528051808352908601935086918601905b8083101561206b57845180516001600160a01b031683528781015188840152848101511515858401528601511515868301529386019360019290920191608090910190612023565b5098975050505050505050565b60006060820185835260206060818501528186518084526080860191508288019350845b818110156120c15784516001600160a01b03168352938301939183019160010161209c565b505084810360408601526120d58187611e54565b98975050505050505050565b6040805190810167ffffffffffffffff8111828210171561210457612104612281565b60405290565b6040516080810167ffffffffffffffff8111828210171561210457612104612281565b604051601f8201601f1916810167ffffffffffffffff8111828210171561215657612156612281565b604052919050565b600067ffffffffffffffff82111561217857612178612281565b5060051b60200190565b6000821982111561219557612195612255565b500190565b6000826121a9576121a961226b565b500490565b6000828210156121c0576121c0612255565b500390565b60005b838110156121e05781810151838201526020016121c8565b8381111561119d5750506000910152565b600181811c9082168061220557607f821691505b60208210811415610f8357634e487b7160e01b600052602260045260246000fd5b600060001982141561223a5761223a612255565b5060010190565b6000826122505761225061226b565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146122ad57600080fd5b5056fea26469706673582212200559d2696336881a99d84f46fc099b10386a0f575498f9be626a984ada7fb9b164736f6c63430008040033";

export class ContractualNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractualNFT> {
    return super.deploy(overrides || {}) as Promise<ContractualNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ContractualNFT {
    return super.attach(address) as ContractualNFT;
  }
  connect(signer: Signer): ContractualNFT__factory {
    return super.connect(signer) as ContractualNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractualNFTInterface {
    return new utils.Interface(_abi) as ContractualNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractualNFT {
    return new Contract(address, _abi, signerOrProvider) as ContractualNFT;
  }
}