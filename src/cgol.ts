/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { add, raceGens } from "./helpers";

export {}

// #region input

let cells = [...Array(100)].map(x => [...Array(100)].map(Math.random).map(Math.round));

const getCell = (x: number, y: number, cells: number[][]) => cells[x]?.[y] ?? 0
const getCellDir = (x: number, y: number, dir: readonly [number, number], cells: number[][]) => {
  x += dir[0];
  y += dir[1];
  return getCell(x, y, cells);
}
const dirs = [[0 - 1, 0], [0 - 1, 0 - 1], [0 + 1, 0 - 1], [0 + 1, 0 + 1], [0 - 1, 0 + 1], [0 + 1, 0], [0, 0 - 1], [0, 0 + 1]] as const;
const updateCell = (x: number, y: number, cells: number[][]) => {
  const n = dirs.filter(dir => getCellDir(x, y, dir, cells)).length
  const c = getCell(x, y, cells);
  return c === 0 ? n === 3 ? 1 : 0 : c === 1 ? n === 2 || n === 3 ? 1 : 0 : -1;
}

const iterate = (cells: number[][]) => cells.map((r, x) => r.map((_, y) => updateCell(x, y, cells)));

(async () => {
  do {
    cells = iterate(cells);
    console.log(cells.map(x => x.map(y => " #"[y]).join("")).join("\n"))
    await new Promise(x => setTimeout(x, 100))
  } while(true)
})()


