require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

module.exports = {
  solidity: {
    version: "0.8.8",
    settings: {
     
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC,
      gas: 2100000,
      gasPrice: 8000000000,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
