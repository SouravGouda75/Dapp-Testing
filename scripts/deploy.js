
const hre = require("hardhat");

async function main() {


  const Lock = await hre.ethers.getContractFactory("Bank");
  const lock = await Lock.deploy();

  await lock.deployed();

  console.log(
    `Bank Contract deployed to ${lock.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
