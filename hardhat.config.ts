import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";
import "@matterlabs/hardhat-zksync-node";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

import "dotenv/config";


const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: "0.6.6",
      settings: { optimizer: { enabled: true, runs: 200 } }
    }]
  },
  defaultNetwork: "zkSyncTestnetSepolia",
  networks: {
    MerlinTestnet: {
      url: "https://testnet-rpc.merlinchain.io",
      accounts: [process.env.SECRET_KEY || ''],
    },
    zkSyncTestnetSepolia: {
      url: "https://sepolia.era.zksync.dev",
      ethNetwork: "sepolia",
      zksync: true,
      verifyURL: "https://explorer.sepolia.era.zksync.dev/contract_verification",
    },
    zkSyncTestnetGoerli: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: "goerli",
      zksync: true,
      verifyURL: "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
    },
    zkSyncMainnet: {
      url: "https://mainnet.era.zksync.io",
      ethNetwork: "mainnet",
      zksync: true,
      verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
    },
  },
  etherscan: {
    apiKey: {
      MerlinTestnet: "merlintestnet"
    },
    customChains: [
      {
        network: "MerlinTestnet",
        chainId: 686868,
        urls: {
          apiURL: "https://testnet-scan.merlinchain.io/api",
          browserURL: "https://testnet-scan.merlinchain.io"
        }
      }
    ]
  },
  sourcify: {
    enabled: true
  }
};

export default config;
