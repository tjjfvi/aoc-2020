/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { add, allGens, mult, repeatTillConst } from "./helpers";

export {}

let input = `


916438275





`.trim();

const testInput1 = `


389125467


`.trim()

const { log } = console;

// console.log = () => {} // <----------------------------------

// input = testInput1; // <---------------------------------------

let arr = [...input.split("").map(x => +x), ...Array(1e6 + 1).fill(0).map((_, i) => i).slice(10)]

let map = Array(1e6);

for(let i = 0; i < arr.length; i++)
  map[arr[i]] = arr[i + 1] ?? arr[0]

const moves = 1e7;

let cur = arr[0]

for(let i = 0; i < moves; i++) {
  const pickedUp = [map[cur], map[map[cur]], map[map[map[cur]]]]
  const target =
   [cur - 1, cur - 2, cur - 3, cur - 4].map(x => 1e6 - (1e6 - (x + 1e6) % 1e6) % 1e6).find(x => !pickedUp.includes(x))!
  map[cur] = map[map[map[map[cur]]]];
  [map[pickedUp[2]], map[target]] = [map[target], pickedUp[0]];
  cur = map[cur]
}

while(cur !== 1)
  cur = map[cur]

log(map[cur] * map[map[cur]])
