const { ethers } = require("hardhat");
const hugoJSON = require("../artifacts/contracts/HugoNFT.sol/HugoNFT.json");

async function main() {
  const abi = hugoJSON.abi;
  const provider = new ethers.providers.InfuraProvider(
    "ropsten",
    process.env.PROJECT_ID
  );
  const wallet = new ethers.Wallet(process.env.ETH_ACCOUNT, provider);
  const signer = wallet.connect(provider);
  const hugoNtf = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    abi,
    signer
  );
  await hugoNtf.mint(
    "https://gateway.pinata.cloud/ipfs/Qme3A7q2bDG5uNDhewFfU9JfTCPP8PExwMDn9kBXrAVvdz"
  );
  console.log("NFT minted!", hugoNtf.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
