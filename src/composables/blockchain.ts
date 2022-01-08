// MODIFIED FROM: https://github.com/anders94/blockchain-demo/blob/master/public/javascripts/blockchain.js
import SHA256 from "crypto-js/sha256";

const difficulty: number = 4; // number of 0's in the beginning of hash
const maxNounce: number = 500000; // limit nouce, prevent mineing forever

export function getHash(data: string): string {
  return SHA256(data).toString();
}

export class Block {
  index: number;
  data: string;
  prevHash: string;
  hash: string;
  nounce: number;
  timestamp: Date;

  constructor(index: number, prevHash?: string) {
    this.index = index;
    this.data = "";
    this.prevHash = prevHash ?? "";
    this.hash = "";
    this.timestamp = new Date();
    this.nounce = 0;
    this.mine();
  }

  getText(): string {
    return (
      this.index + this.data + this.prevHash + this.timestamp.toISOString()
    );
  }

  reHash() {
    this.hash = getHash(this.getText() + this.nounce);
  }

  isPrevHashValid(): boolean {
    return this.isHashValid(this.prevHash);
  }

  isHashValid(hash?: String): boolean {
    const hashToTest = hash ?? this.hash;
    return hashToTest.substring(0, difficulty) == "0".repeat(difficulty);
  }

  async mine() {
    if (this.isHashValid()) return;
    for (let i = 0; i <= maxNounce; i++) {
      const tmpHash = getHash(this.getText() + i);
      if (this.isHashValid(tmpHash)) {
        this.hash = tmpHash;
        this.nounce = i;
        break;
      }
    }
  }
}

export class Chain {
  index: number;
  blocks: Array<Block>;

  constructor(index: number) {
    this.index = index;
    this.blocks = [new Block(0)]; // init genesis block
  }

  get length(): number {
    return this.blocks.length;
  }

  get lastBlockHash(): string {
    return this.blocks[this.length - 1].hash;
  }

  async addBlock() {
    const newBlock = new Block(this.length - 1, this.lastBlockHash);
    this.blocks.push(newBlock);
  }

  updateHash(index: number) {
    console.log(index);
    for (let i = index; i < this.length; i++) {
      this.blocks[i].reHash();
      if (i < this.length - 1)
        this.blocks[i + 1].prevHash = this.blocks[i].hash;
    }
  }
}
