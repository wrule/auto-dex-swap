import { ethers } from 'ethers';
const secret = require('../.secret.json');

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${secret.prj_id}`);
  // const wallet = new ethers.Wallet(secret.pri_key, provider);
}

main();
