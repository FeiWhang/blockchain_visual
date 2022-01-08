// MODIFIED FROM: https://github.com/anders94/blockchain-demo/blob/master/public/javascripts/blockchain.js
import SHA256 from "crypto-js/sha256";

const difficulty: number = 4; // number of 0's in the beginning of hash
const maxNounce: number = 500000; // limit nouce, prevent mineing forever

export class Block {
  index: number;
  data: string;
  prevHash: string;
  hash: string;
  nounce: number;
  timestamp: Date;

  constructor(
    index: number,
    nounce?: number,
    hash?: string,
    prevHash?: string
  ) {
    this.index = index;
    this.data = "";
    this.prevHash = prevHash ?? "";
    this.hash = hash ?? "Error";
    this.timestamp = new Date();
    this.nounce = nounce ?? 0;
  }

  getText(): string {
    return (
      this.index + this.data + this.prevHash + this.timestamp.toISOString()
    );
  }

  onDataChange() {
    this.hash = getHash(this.getText() + this.nounce);
  }

  isValidHash(hash?: String): boolean {
    const hashToTest = hash ?? this.hash;
    return hashToTest.substring(0, difficulty) == "0".repeat(difficulty);
  }

  async mine() {
    if (this.isValidHash()) return;
    for (let i = 0; i <= maxNounce; i++) {
      const tmpHash = getHash(this.getText() + i);
      if (this.isValidHash(tmpHash)) {
        this.hash = tmpHash;
        this.nounce = i;
        break;
      }
    }
  }
}

export function getHash(data: string): string {
  return SHA256(data).toString();
}
