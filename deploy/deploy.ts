import { Wallet } from 'zksync-ethers';
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import "dotenv/config";

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the v2 router2 contract`);

  // Initialize the wallet.
  const wallet = new Wallet(process.env.SECRET_KEY || '');
  const factoryAddress = process.env.FACTORY || '';
  const wrapToken = process.env.WRAP_TOKEN || '';

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("UniswapV2Router02");
  const fee = await deployer.estimateDeployFee(artifact, [
    factoryAddress,
    wrapToken,
  ]);
  console.log("estimateDeployFee -> ", fee.toString());

  console.log(`Deploying ${artifact.contractName}...`);
  const v3factory = await deployer.deploy(artifact, [
    factoryAddress,
    wrapToken,
  ]);

  // Show the contract info.
  const contractAddress = v3factory.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
  await hre.run("verify:verify", {
    address: contractAddress,
    contract: "contracts/UniswapV2Router02.sol:UniswapV2Router02",
    constructorArguments: [
      factoryAddress,
      wrapToken,
    ],
  });
}
