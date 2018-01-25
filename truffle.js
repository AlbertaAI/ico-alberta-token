var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"

module.exports = {
  networks: {
    ganache: { // ganache testnet
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    dev: { // testrpc
      host: "localhost",
      port: 8545,
      network_id: "*" 
    },
    ropsten_home: { // home linux ropsten testnet on geth - syncing
      host: "192.168.0.99",
      port: 8545,
      network_id: "3",
      gas:   4000000,
      from: "0xaea9c47a12570001789805aba99cc08c84f4dd73"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/Ey5dYliB2nfbF2j02IH3")
      },
      network_id: 3,
      gas: 4512000
    },
    infura: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://infuranet.infura.io/Ey5dYliB2nfbF2j02IH3")
      },
      network_id: 3,
      gas: 4512000
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/Ey5dYliB2nfbF2j02IH3")
      },
      network_id: 3,
      gas: 4512000
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/Ey5dYliB2nfbF2j02IH3")
      },
      network_id: 3,
      gas: 4512000
    }
  }
};

