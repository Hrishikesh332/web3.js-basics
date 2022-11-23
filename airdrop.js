//Airdrop is used for funds
//airdrops allow users to receive free cryptocurrencies in their wallets

//import {clusterApiurl, Connection} from "@solana/web3.js";
const solanaWeb3=require('@solanna/web3.js');
const a=(async ()=>{
//const {generateKeyPair} = require('crypto');
const connection= new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("devnet"), "confirmed");
const publicKey=solanaWeb3.Keypair.generate().publicKey

let tokenAmount = await connection.getBalance(publicKey);

const airdropSignature=await connection.requestAirdrop(
    publicKey,
    2*solanaWeb3.LAMPORTS_PER_SOL
);
await connection.confirmTransaction(airdropSignature);
tokenAmount=await connection.getBalance(publicKey);
console.log(`amount: ${tokenAmount}`);
    })



console.log(publicKey);
