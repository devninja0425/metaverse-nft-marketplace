/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    //  unused configuration commented out for now
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
