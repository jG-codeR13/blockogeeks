var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    kovan: {
      host:"kovan.infura.io/v3/49179b461a5e4e1aadc02ce09dfe57f1" ,
      provider: function() {
        return new HDWalletProvider("8aea1bca6cffa3172d9bcd4c59b7dd79cef07952451654589ab12e20eec99005", "https://kovan.infura.io/v3/46770654a6f6479489228ef81a5b797a")
      },
      network_id: 42
    },
  }
};
