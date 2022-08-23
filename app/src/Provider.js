const Web3 = require("web3");
const HDWallet = require("@truffle/hdwallet-provider");

class Provider {
  constructor() {
    //setup web3 provider
    this.web3 = new Web3(
      new HDWallet(
        "0x53fc1da06fb832df4f28ddfa72c7856c70c990b42eff5b93cbc2e1994541b156",
        "https://coston-api.flare.network/ext/bc/C/rpc"
      )
    );
  }
}

module.exports = Provider;
