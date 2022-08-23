const Contract = require("./Contract");
const Provider = require("./Provider");

const provider = new Provider();
const contract = new Contract();
const web3 = provider.web3;
const instance = contract.initContract();

class tokenFactory {
  // send tokens
  async send(tkn, to, amount) {
    try {
      const accounts = await web3.eth.getAccounts();
      const val = await web3.utils.toHex(amount);
      const trans = await instance.methods.transferODN(tkn, to, val).send({ from: accounts[0] });
      return trans;
    } catch (error) {
      console.log(error);
    }
  }

  //get balance
  async balance(tkn, owner) {
    try {
      const accounts = await web3.eth.getAccounts();
      const bals = await instance.methods.balODN(tkn, owner).send({ from: accounts[0] });
      return bals;
    } catch (error) {
      console.error(error);
    }
  }

  async listToken() {
    try {
      const accounts = await web3.eth.getAccounts();
      const listT = await instance.methods
        .listTokens()
        .send({ from: accounts[0] });
      return listT;
    } catch (error) {
      console.error(error);
    }
  }

  async contractAddy() {
    try {
      const addy = await instance.methods.msg.sender;
    } catch (error) {
      console.log(error);
    }
  }

  //START
  //Buy

  //Sell
  //Transfer
  //Owner
}
module.exports = tokenFactory;
