const hre = require("hardhat");

async function main() {
  const EtherTransfer = await hre.ethers.getContractFactory("EtherTransfer"); //get  the contract
  const etherTransfer = await EtherTransfer.deploy(); //make an instance
  await etherTransfer.deployed(); //deploy the instance
  console.log(`Deployed contract Address is ${etherTransfer.address}`); //console the contract address
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
