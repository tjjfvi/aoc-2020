/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { add, mult } from "./helpers";

export {}

let input = `



##......
.##...#.
.#######
..###.##
.#.###..
..#.####
##.####.
##..#.##


`.trim()

const testInput1 = `



.#.
..#
###




`.trim();


const { log } = console;

// console.log = () => {} // <----------------------------------

// input = testInput1; // <---------------------------------------

const lines = input.split("\n");
const paragraphs = input.split("\n\n");

type Cells = Map<string, boolean>;

function getCell(cells: Cells, x: number, y: number, z: number, w: number): boolean{
  return cells.get([x, y, z, w] + "") ?? false
}

function* listNeighbors(x: number, y: number, z: number, w: number){
  for(const X of [-1, 0, 1])
    for(const Y of [-1, 0, 1])
      for(const Z of [-1, 0, 1])
        for(const W of [-1, 0, 1])
          if(X !== 0 || Y !== 0 || Z !== 0 || W !== 0)
            yield [x + X, y + Y, z + Z, w + W] as const;
}

function* listCells(cells: Cells){
  let prev = new Set<string>();
  for(const _cell of cells.keys())
    for(const cell of listNeighbors(...(_cell.split(",").map(x => +x) as [number, number, number, number]))) {
      if(!prev.has(cell + "")) {
        prev.add(cell + "")
        yield cell;
      }
    }
}

function iterateCell(cells: Cells, x: number, y: number, z: number, w: number){
  const cur = getCell(cells, x, y, z, w);
  const neighbors = [...listNeighbors(x, y, z, w)].filter(c => getCell(cells, ...c)).length;
  return (
    cur ?
      neighbors === 2 || neighbors === 3 :
      neighbors === 3
  )
}

function* _iterate(cells: Cells){
  for(const cell of listCells(cells))
    yield [cell + "", iterateCell(cells, ...cell)] as const
}

const iterate = (cells: Cells) => new Map(_iterate(cells));

const start = new Map(lines.flatMap((l, i) => l.split("").map((c, j) => [[i, j, 0, 0] + "", c === "#"] as const)))

log(

  start,

  [...[...Array(6)].reduce(iterate, start).values()].filter(x => x).length,

)
