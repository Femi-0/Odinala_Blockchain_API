const tokenFactory = artifacts.require("tokenFactory");
const fs = require("fs");

const path = "/../src/Metadata.js";

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(tokenFactory).then(() => {
    fs.writeFile(
      __dirname + path,
      "const ADDRESS = " + "'" + tokenFactory.address + "';",
      (err) => {
        if (err) {
          console.log(err);
        } else {
        }
      }
    );

    fs.appendFile(
      __dirname + path,
      "\nconst ABI = " + JSON.stringify(tokenFactory.abi) + ";",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          fs.appendFile(
            __dirname + path,
            "\nmodule.exports = { ADDRESS, ABI };",
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        }
      }
    );
  });
};
