/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { SSL_OP_NO_TLSv1_2 } from "constants";
import { add, allGens, mult, repeatTillConst } from "./helpers";

export {}

let input = `



Player 1:
26
16
33
8
5
46
12
47
39
27
50
10
34
20
23
11
43
14
18
1
48
28
31
38
41

Player 2:
45
7
9
4
15
19
49
3
36
25
24
2
21
37
35
44
29
13
32
22
17
30
42
40
6



`.trim();

const testInput1 = `


Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10

`.trim()

const { log } = console;

console.log = () => {} // <----------------------------------

// input = testInput1; // <---------------------------------------

const [p1, p2] = input.split("\n\n").map(x => x.split("\n").slice(1).map(x => +x));

function rc(p1: number[], p2: number[]){
  let lastRounds = []

  console
  while(1) {
    const key = JSON.stringify([p1, p2])
    if(lastRounds.includes(key))
      return p1
    lastRounds.push(key)
    console.log(p1.length, p2.length)
    const v1 = p1.shift()
    const v2 = p2.shift()

    let win: boolean;
    if(p1.length >= v1 && p2.length >= v2) {
      const sp1 = p1.slice(0, v1)
      const sp2 = p2.slice(0, v2)
      const result = rc(sp1, sp2)
      win = result === sp1;

    } else win = v1 > v2
    if(win) {
      p1.push(v1)
      p1.push(v2)
    } else {
      p2.push(v2)
      p2.push(v1)
    }
    if(!p2.length)
      return p1
    if(!p1.length)
      return  p2
  }
}


log(

  rc(p1, p2)
    .reverse()
    .map((x, i) => x * (i + 1))
    .reduce(add, 0)


)
