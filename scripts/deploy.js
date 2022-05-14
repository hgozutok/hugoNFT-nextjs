const { ethers } = require("hardhat");

async function main() {
  // Deploy a new contract
  const HugoNFT = await ethers.getContractFactory("HugoNFT");
  const hugoNFT = await HugoNFT.deploy("HugoNFT", "SHG");

  await hugoNFT.deployed().then((address) => {
    console.log("HugoNFT address:", hugoNFT.address);
    console.log("Hugo address:", address);
  });

  // console.log("HugoNFT.deployed() at: " + hugoNFT.deployed().address);
  const newItemId = await hugoNFT
    .mint(
      "https://gateway.pinata.cloud/ipfs/Qme3A7q2bDG5uNDhewFfU9JfTCPP8PExwMDn9kBXrAVvdz"
    )
    .then((tx) => {
      console.log("Transaction hash: " + tx.hash);
      console.log("mintNFT() at: " + newItemId);
      return tx.hash;
    });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
