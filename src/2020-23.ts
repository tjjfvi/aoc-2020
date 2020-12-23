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

interface LinkedList {
  value: number,
  next: LinkedList,
}

function linkedListify(arr: number[]){
  console.log(arr.length)
  let tail: LinkedList = null as any
  let cur: LinkedList = null as any;
  for(const value of arr.reverse()) {
    cur = { value, next: cur }
    tail ??= cur
  }
  tail.next = cur
  return cur
}

let cur = linkedListify(
  [...input.split("").map(x => +x), ...Array(1e6 + 1).fill(0).map((_, i) => i).slice(10)]
);

let map = new Map<number, LinkedList>();

console.log(cur.next.next.next.next.next.next.next.next)

while(!map.has(cur.value)) {
  map.set(cur.value, cur)
  cur = cur.next
}
// console.log(map)

const moves = 1e7;

for(let i = 0; i < moves; i++) {
  // if(i % 1000 === 0)
  //   log("i", i)
  const curValue = cur.value;
  const pickedUp = cur.next
  const pickedUpValues = [cur.next.value, cur.next.next.value, cur.next.next.next.value]
  const targetValue =
   [curValue - 1, curValue - 2, curValue - 3, curValue - 4].map(x => 1e6 - (1e6 - (x + 1e6) % 1e6) % 1e6).find(x => !pickedUpValues.includes(x))!
  cur.next = cur.next.next.next.next
  let target = map.get(targetValue)!;
  if(targetValue === undefined)
    debugger
  [pickedUp.next.next.next, target.next] = [target.next, pickedUp];
  [targetValue, curValue]
  cur = cur.next
}

while(cur.value !== 1)
  cur = cur.next

log(

  cur.next.value * cur.next.next.value








)
