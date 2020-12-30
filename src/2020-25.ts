/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { add, allGens, mult, repeatTillConst } from "./helpers";

export {}

let input = `



11404017
13768789




`.trim();

const testInput1 = `




5764801
17807724



`.trim()

const { log } = console;

// console.log = () => {} // <----------------------------------

// input = testInput1; // <---------------------------------------

const [a, b] = input.split("\n").map(x => +x)


function transformSubjectNumber(subject: bigint, loops: bigint){
  let val = 1n;
  for(let i = 0; i < loops; i++) {
    val *= subject
    val %= 20201227n
  }
  return val
  return subject ** loops % 20201227n
}


function breakKey(subject: bigint, key: bigint){
  let val = 1n;
  let loops = 0n;
  while(val !== key) {
    loops++
    val *= subject
    val %= 20201227n
  }
  return loops;
}


log(

  transformSubjectNumber(7n, 2n ** 25n),




)
