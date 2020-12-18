/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { add, raceGens } from "./helpers";

export {}

// #region input

let input = `


1002576
13,x,x,x,x,x,x,37,x,x,x,x,x,449,x,29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,23,x,x,x,x,x,x,x,773,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,17


`.trim()

// #endregion

const testInput1 = `

939
7,13,x,x,59,x,31,19

`.trim();

const testInput2 = `

939
1789,37,47,1889

`.trim();

// input = testInput2; // <---------------------------------------

const [, bussStr] = input.split("\n");

const buss = bussStr
  .split(",")
  .map((x, i) => [x === "x" ? null : BigInt(x), BigInt(i)] as const)
  .filter(([x]) => x !== null)
  .map(([x, y]) => [x!, y]as const)
  .map(([x, y]) => [x, y % x])
  // .sort(([a], [b]) => Number(b! - a!));

const max = BigInt(Math.max(...buss.map(x => Number(x[0]))))

console.log(buss)

    // (x - (t % x)) % x === i
const f = (t:number, x:number, i: number) => (t % x) === (x - i) % x

// 2
// + 5
// % 3 = 1

// % 3 = (1 - (2 % 3))
// x * 5 = y * 3 + (1 - (2 % 3))
// (x * 5) % 3 = (1 - (2 % 3))

// 2 7=1 6=0

/** */

let start = 0n;
start = 1071299177000000n;
start = 100000000000000n
let mult = max;
// eslint-disable-next-line max-len
console.log(buss.length)
let i = 0;
main: for(let t = max - BigInt(buss.find(([x]) => x === max)![1]) + (start / max) * max; t < Infinity; t += mult) {
// const t = 1068781;
  // console.log(i++)

  for(let j = 0; j < buss.length; j++) {
    if(!buss.length) break;
    const [x, i] = buss[j];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const rel = (x! - (t % x!)) % x!;
    if(rel !== (i % x!)) {
      if(t % 1000000n === 0n)
        console.log(t, buss.length, mult, buss[0])// , mult % buss[1]?.[0]!, mult, buss[1]?.[0]!)
      continue main;
    }
    // mult *= x!;
    // buss.shift();
  }
  console.log(t);
  break;
}


// const [timeStr, bussStr] = input.split("\n");

// const  time = +timeStr;
// const buss = bussStr.split(",").filter(x => x !== "x").map(x => +x);


// console.log(


//   buss.map(x => [(x - (time % x)), x]).sort(([a], [b]) => a - b).map(([a, b]) => [a, b, a * b])
// )
/** */
