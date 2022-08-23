const Web3 = require("web3");
const HDWallet = require("@truffle/hdwallet-provider");

class Provider {
  constructor() {
    //setup web3 provider
    this.web3 = new Web3(
      new HDWallet(
        PRIVATE_KEY,
        "https://coston-api.flare.network/ext/bc/C/rpc"
      )
    );
  }
}

module.exports = Provider;
