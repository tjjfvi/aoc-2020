/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { add } from "./helpers";

export {}

let input = `


0,5,4,1,10,14,7


`.trim()

const testInput1 = `

0,3,6




`.trim();


const { log } = console;

console.log = () => {} // <----------------------------------

// input = testInput1; // <---------------------------------------

const lines = input.split("\n");
const paragraphs = input.split("\n");


const numbers = input.split(",").map(x => +x)
const map = new Map<number, number>([...numbers.entries()].map(([x, y]) => [y, x + 1]));

let last = numbers[numbers.length - 1];


for(let i = numbers.length + 1; i <= 30000000; i++) {
  console.log(last)
  const ind = map.get(last)
  map.set(last, i - 1);
  console.log("ind", ind)
  const n = ind == null ? 0 : i - ind - 1;
  last = n;
}







log(


  last


)
