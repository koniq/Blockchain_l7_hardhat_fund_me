require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("hardhat-deploy-ethers")

// const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
// const SEPOLIA_RPC_URL =
//     process.env.SEPOLIA_RPC_URL ||
//     "https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY"
// const PRIVATE_KEY =
//     process.env.PRIVATE_KEY ||
//     "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    // solidity: "0.8.9",
    solidity: { compilers: [{ version: "0.8.9" }, { version: "0.6.6" }] },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        // sepolia: {
        //     url: SEPOLIA_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 11155111,
        //     blockConfirmations: 6,
        // },
    },
    namedAccounts: {
        deployer: {
            default: 0,
            1: 0,
        },
    },
}
