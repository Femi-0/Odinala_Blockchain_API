const ADDRESS = "0x28B6D35Fb41Ff499b4058d2c7F99Ce418720184C";
const ABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "balz",
    type: "event",
    signature:
      "0x237ae6817eb9a8243028ffa1686674269cd3275cb472019dd595c1a4a621edee",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    name: "listT",
    type: "event",
    signature:
      "0xc32707df77cfea7cbbb8aaac8336491597f347c85fdb7742c00a3b765b3371e0",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "uint8", name: "decimals", type: "uint8" },
      { internalType: "uint256", name: "initialSupply", type: "uint256" },
    ],
    name: "deploy20Contract",
    outputs: [
      {
        internalType: "contract ODNERC20",
        name: "creditsAddress",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x3af6f96a",
  },
  {
    constant: false,
    inputs: [
      { internalType: "contract ODNERC20", name: "tkn", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferODN",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x54156248",
  },
  {
    constant: false,
    inputs: [
      { internalType: "contract ODNERC20", name: "tkn", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    name: "balODN",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x9848ffc1",
  },
  {
    constant: false,
    inputs: [],
    name: "listTokens",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x7488ff76",
  },
];
module.exports = { ADDRESS, ABI };
