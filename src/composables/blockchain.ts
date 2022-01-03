// MODIFIED FROM: https://github.com/anders94/blockchain-demo/blob/master/public/javascripts/blockchain.js
import SHA256 from "crypto-js/sha256";

const difficulty: number = 4; // number of 0's in the beginning of hash
const maxNounce: number = 500000; // limit nouce, prevent mineing forever

export function getHash(data: string): string {
  return SHA256(data).toString();
}
