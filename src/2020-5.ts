
// #region input

let input = `

FFBBBFFLRL
BFFBFBFRLR
FFFBBFBRRR
BFFBBBBRRL
FFFBBFBLLR
BBFBFBFLLR
FBBFFBFLRL
BFBFBBFLLL
FBFBBFBLRR
FFFBBBBRLR
FFFFBFFRRL
BFFFBFBLRL
BBFFFBBRLL
FFBFFFBLRL
FBFBFFFRLL
BFFBBBFRRL
BFFFBBFRLR
BBBFFFBRLL
FBBBFFBRLL
FFFBFFBRLL
BBFBFBFLLL
BFFBFFFLRL
BBFBBFFLRL
FBFBBBFRRR
FBBBBFBRRL
FBBFFFFLRL
FFFBBFBLRL
BFFFFFFLLR
FFBFFBBRRR
FFFFBBBRLR
FFFBFFFLRR
FBBFBBFLLL
FBBFBBBRLR
BFFBFFFLLR
FFBFBFFRLL
FFFFBBFLRR
BBFBBBFLRR
BFBFBBBRLR
BFFBBFFLRL
BFFBFFFLLL
FBFFFBFLRR
FFFBBBFRLR
FBBFBBFRLL
BBFFFBBLLL
BBFFFFFLLL
FBFFBBBLLL
FBFFFBFLRL
FFBFBBFLLL
BFFBBFBLLR
BFBBBFFRRR
BFBBBBBLLR
FBFFFFFRLR
BBFFBFFLLR
FFBFBFFLLR
BBFBBBFRRL
FFFBFFFRLR
FBFBFFFLRL
BBFFFFBLLL
FFBBFFFLRL
BBFFBFBRRR
FBBFBBBLLR
BFFFBFBRRR
BBFFFFFLRL
FBFBBFBRRR
FFFBBBBLRR
FBBFBFFLLR
BBFBFFFRLR
BBFFFFBRLR
FBFBFFBRLR
FFFBBFFLLR
FBBFFFFLRR
BBFFBBBLLR
BBFFFFBRRL
BFBBBBBRRL
FBBBFFBRLR
FFBBBFBRLR
BFBBBBBRLR
FBFBBBFRLR
BBFBBFBRRR
FFBFFBBLRR
FFBBBBFLLR
BFFFBBBLRL
FBBFBFFLRL
FBFFBFFRRL
FBBBFFFRRR
FFBBFBFRLL
FBBFBBBLLL
FFFFBFFRLR
BBFBBBFRLR
FBFBBBBLRL
FFFFBBBLRL
BFFBBFBRRL
BBFFFBFRLR
FBFFBFFRRR
BBFBBFBRLL
FBBFBFFRRR
BFFFBFBLRR
FFFBBFBLRR
FFBFBFFRRL
FFBBBBBRLR
FBBBBBBLLR
BBFBFBBRRL
FBBFFFFRLR
BFBBBBFRRL
FBBFFBFLRR
FFFBBBBLRL
BBFFBBFLRR
BFBFFBBRLL
FFBBBBBLRR
BBBFFFFRRR
BFFFFBFRRR
FBFFFFBLRR
FBBBBBFLRR
FFBBBBFRRR
FFBFBFFLLL
FBFBFFFLLR
BFBBBBFLLL
FBBFBBFRLR
FFFBFBFLLL
FBBFBBFLLR
FBFFFFFRRL
BFFBBBBRLL
BFFBFFBLRR
FBBFFFBLLR
FBBFBFBLLL
BFFFBFBRLR
FBFBFBBRLR
FBFFFBFRRR
BFFBBFFRRR
BFBFFFBRRL
BFFBFBBRRL
BBFFBFBRRL
FBBBBFBRRR
FFFBBBBRRL
BFFFFBFLLL
FBBBFBFLLR
BBFFBFFRLR
FBBFBFFRLR
BFFFBFFLRR
FBBFFBFLLL
FFBBFFBRRR
FFBFFFBLRR
FFBFBBBRLR
BBFBBFFLLR
BBFFFBFLRR
FFFBBBFLRR
FBFFFBFLLR
BBFBFBFLRL
BFBFBBBLRR
BFFBBFFRLR
FBFBBBBRLL
BBFFBBBLRL
BBFFFBFLLR
BBFFBFFRLL
FFFFBFBRRR
BFBFFBBLRR
BFBBBBBRLL
FBBFFFFRRR
BFFFBBBRRL
BFFBFBFLRL
FFFFBFFRLL
FBFFFFBRRL
BBBFFFBRRL
BFBBFFFLLL
FFFFBBBRRL
FBFFBBBRLR
FFBFFFFRLL
BFFBBBBRRR
BBFFBBFRRL
BFBBBFBLLL
FBBBFBBLLL
FBFBFFFLLL
BFBFFFFRLR
FFBFFBFLLR
BFFBFBBRLL
BFBBBFFLLL
FBBFBFFRLL
FFBFBBFLLR
FBFBFBBRRL
BFBFBFFLRL
FFBFFFFRRL
BFFBFFFRLR
BFFFBBBLRR
BBFBFBBLLR
BFFBFBFLLR
BFBBFBFRRR
FBFBFFBLRR
BBFBBBBRRL
BFFFBFFLLR
FFFFBBFRRL
FFFBFFBRRL
FBFFFBBRRR
BFBBBBFLLR
BBFBFBFRRL
FFFBBFFLRL
BBBFFFFLRL
FFFBFFFRRL
FBFBFFFLRR
FFBFBBFLRL
BBFBFBFRLR
BBFBBFFRLR
FBBFBFBRRR
FBFFFBBRLR
BBFFBBBRLL
BFFBFFBLLR
FBBBFBBLRL
FFFBFFFRRR
BFBBBFFLLR
FBBFFFFLLL
BFBBFBFRRL
FBBFFBBRRR
BFBFFFBLRL
BBBFFBFLLL
FFBFFBFRRL
FBFFBFBRRL
BFFFFBFRLL
FFBFFFBRLL
FFBBFFBLLL
BFFBBFFLLL
FBFFFFBLRL
BFBFFBFLLR
FFFFBBBLRR
BFFBFBBRLR
FBBBFFFRRL
BBFBFBBLLL
FFBBBFBRRL
BBFBFFBLRR
FBFBFFBLRL
BBFBBFBLRL
BFBBFFBRRL
FFBBBFBLLL
FFBFBBFRLL
BFFFFBBLLL
FBBBFBBLRR
FBFBBFBLLL
FFBBBBFRRL
BBFBBBBLLL
FBFBBBBLLR
BFFFBFBLLR
FBBBFFFRLR
FFBBBFBRRR
BBFFFFBLLR
BBFFBBBLLL
BBFFBBFLRL
BBBFFFBLRR
BBBFFFFRLL
BFBFFFFRRR
BFFFBFBRRL
FBBBBBBLRL
FFBFBBBRRL
FFBFBFFLRL
FFBBFFFLLL
BBFFBFBLLR
BFBBBFBRLL
FFBBBFBRLL
FBFBBFBRRL
FBFFBFFLLR
BBBFFFBRRR
BBFBBBBLRR
BBFFBBBRLR
FBBBBFFRRR
BFFFFBBLRR
FFBFFBBRRL
FBFBBBFRLL
BBFBFBBLRL
BFBBFBBRRR
BFBBFBBRLR
FFFBFBBLLR
FFFBFFFLLR
BFFFBBFLRL
FBFBBFFLRL
BFBFBBBRRL
BBFBFBBRRR
BBFFBFBRLR
BFBFBFBRLL
FBBFBFBLRL
FFBBFBBRRL
FFBFFFBLLL
FBBBFFBRRL
BFBBFFBLRL
FFFBBBBRLL
FBFBFBFLRR
FFFBFBFLRL
BFBBBBBLRR
BBFFBFFLLL
FFFFBFFLRR
FFBBFFBRLR
FBBBFFBLRR
FBBBBFBLRL
FBFFBBFRLR
FFBFBFFRRR
FBFFFBFRLL
FFFBFBFRRR
BFFFBFFRRL
FFFBFBFLRR
BBFFBFFLRL
BBBFFBFLLR
FFFBFFBLRL
BFBBBBFRRR
BFFBFFFLRR
FBFFFFBRRR
BFFBFFFRLL
FBFFBFFRLL
FFFBBBBLLR
FFFBBBFLLR
BFBBBFFLRR
BBBFFFFRRL
FFFBBFFRRR
BBFFBBBLRR
FFBFFFBRRR
BFFBFFFRRL
BFFBFBFRRL
BBFFFBFLLL
FBFBFFBRRL
BFBFFFBLLR
FFBBBBBLRL
FBFBBBBRRL
BFFBBFBLRL
FBBFBBFLRL
FFBFFFBRLR
FBFFFBFRRL
FFFFBBFRLL
BFBBFBFLRL
FFFBFFBLLR
FBBFBFBRRL
FFBFFFBLLR
FFBBBBFLLL
BFBBBBFLRR
FBFFFBFLLL
BBFBFFBRRL
FBBBFBBRRR
FFFBBBBLLL
FBBBBBFRRL
BFBBBBFRLR
BFFBBBFRLL
FBFFFFFLRR
BFBBBBFLRL
FBFBFBBRLL
BFFBBBBLRR
BFFFFFFLLL
BBBFFFFLLL
BFBFFFFRLL
FBBFBFFLLL
BFBFFBBRLR
BBFBFFFRRL
FBFBFFBRLL
FBFBBFBLLR
FBFFBFBRLR
FBBFFBBRLR
FBBFBBFRRL
FFBBFFBRLL
FBFFBFFLLL
BBFBBFFRLL
BFFFFBFRRL
FBFBFBFRLL
FFFBBFBRRL
BFFFBBFRRR
BFFBBBFLRR
FBBFFBFRLL
BBFBFBBLRR
BBFBBFBRLR
BFBFBBFRRL
FBBBFFFLRL
FBFBFFBRRR
BFBFBBFRRR
FFBBFBBLRL
BFFBFFBRLR
BFFFFFBRRR
BBFFBBFRRR
BBFFBBFRLL
FFBFFBFRLR
BBFBBBBRLR
BBFFBBBRRL
BFFFBFFLRL
BFBBFBFRLR
FFBBBBBLLL
FBBBBFFRLR
BFBFFFBLRR
BFBFFFFRRL
BFFBBBBLLL
BFBBFFFRLL
FFFBBBFLLL
BFFBBFBLLL
BFFFBBFRRL
FBBBFBBRRL
BFFFBBFLLL
BBBFFFFLLR
BFBBFFFLRL
BFFBBBBLLR
FBBFFFBRRR
BFBFFFFLLR
FBFFBFBLLR
FFBBFFBLLR
FBFBBBFLLL
BBFFFBBRLR
BFBFBFFLLL
FBFFFBBLRL
BFFFBFFRLL
FBBFFFBRRL
BFFFFBBRLL
BFBFBBBLLL
BFBFBFBLLL
FFFBBFBLLL
BBBFFFBLRL
BFBBFBBLLR
BFBFBFFRRR
BBFFFFBLRR
BFFFBBBRRR
FBFFFFFRLL
FFBFFFFRRR
BFBBFFFRRL
BFFFBBBRLL
FFBBFBBRRR
FFBFBFBRRL
FFBFBBFRLR
BFBFFBBLRL
FBBBBBFLLR
BFBFFBBRRL
FFBFFFFLLL
FFFBBFBRLL
FBFBBFFLLR
BFBBFFBRLL
FFBBFBBLLL
FBBBFBFLRR
FFBBFBBLLR
FFBFFFFLLR
BFBBFBBLLL
BBFFBBFLLL
FFBBFFFRRL
FBFBBBBLLL
FBBBBBFLLL
FBBBBFBRLR
BBBFFFFLRR
FBFBFBFLLL
BFBBFFFLRR
FFBBFBBRLL
FBBBBFBRLL
FBFBBFFLRR
FBBBBBFRLR
BFBFBBFLRL
BFBFBFFLRR
FBFBFBFRRR
BFBFFFBRRR
FBBFFFFLLR
BFBFBFBLLR
BFFFFFFLRL
FFFBBBFRRL
BFFFBFFLLL
FFBFBBBRRR
BBFFFFBRLL
FBBBFBFLRL
BFBBBFBLRR
BBFFFBBRRR
FBFFBBFRLL
BFBBFBBLRL
FBBFBBBRLL
BBFBBBFLLR
FFBFFFBRRL
BBBFFFBLLR
FFFFBBBLLL
BFFFBFBLLL
BFFBFBBLRL
FBBFFFBRLR
BFBFFBFRRR
FBBBFBBRLL
FBBBBBFRRR
FBFFFFBRLR
BFFBBBFRLR
BFBBFBFLLR
BFBFBFFRLR
FBFFBFBRRR
FBFFFBBLLL
BFBFBFBRRL
FFFFBFBRLL
FFFBBFFRLR
FFFFBFBLRL
FFFBFFBLLL
FBFFBFFRLR
FBBBFFFLRR
FBFBFFFRLR
FFBFBBFLRR
FFFBFBBLRL
BBFFBFBLRR
BFBFFBFLRR
FBBFFFFRRL
FBFBBFBRLL
FBBBBFFLRR
FBFFFFFLRL
BFBBBFFRRL
FBFFBBBLLR
BBFFFBFRRL
FBBFFBBLRL
BBFFFFFLRR
FBBFFBBRLL
FBBFFBFRRL
FFBFFBFRRR
FBBBBFFRRL
BFBFBBBLLR
FBFFFFFRRR
FFBBFBFRRL
BFBBBFBRLR
FFBBFFBRRL
BBFFBBFRLR
FFBFBBBLRR
FFFBFFFLRL
BBFBBFBLLR
FBBBFBBLLR
BFBBFBFRLL
BBFBFFBRRR
FFBFFBBLRL
BFBFBBBRRR
FBBBFBFRRR
FFBBFFFRLR
BBFBFFBRLR
FFBFBBBLLR
BBFBFFFLRR
BBFFFBBLLR
BFFFFBBLLR
BFFBBFBRRR
BFFBBBFLRL
BFBBFFBLLL
FFFFBFFRRR
FFFBFFBLRR
BFFBFFBLRL
BFBBBBBLLL
FFBFFBFLLL
BFBFBFBRRR
BFFFFFBLRR
BFFFBBFLRR
BBFFFFFLLR
FFFBFBBRRL
FBFFBBFRRL
BBFBBBFLLL
BBFFFFBLRL
BFFFFFFLRR
FBBBBBBLRR
BFFBBBFLLR
FFBFBBFRRR
BFBFBFBLRL
FBFFBFFLRL
FBBBBBBRLL
FFBBBFFLLL
BFBFFFBLLL
FBBFFBBLLL
BBFFBFFLRR
FBBBBBBRLR
FBFFBBFLRL
FBBBBFFLLR
BFBFFFBRLR
FFFBFBBRRR
FFBBFBFLRL
BBFFBFFRRR
FBBFBFBLRR
BFBFBFBLRR
FBFBBFFLLL
FBFBBFFRLR
FBFFBBBRLL
FBBFBFBRLL
BFFFFFFRLL
FBBBBBBLLL
BFFBBFFRRL
FFBFBFBLLR
BFFFFFBRLR
FBFFFBBRRL
BFBFFBFRLR
BFFBFFFRRR
FFBFBBBLLL
BFBFFBFLLL
BFFFFBFLLR
FFBFBFBRLR
BBFBBBBRRR
BBFFFBFRRR
BFFFFFBRRL
FBFFBBFLLL
FBFFFBBLLR
BBFBFBFLRR
BFBFBFFRLL
FBFFFFFLLL
BFBBFBFLLL
FFBFBFFLRR
FBBFFFBLRR
FBBBFFBLRL
BFFFFBBRRR
FBFBBFFRLL
FFBFFBBRLR
FBFFFBBLRR
BFBBFFFLLR
BFBFBFBRLR
BFBFFBBRRR
FFBBBFFRLR
FFBFBBBLRL
FFBFBFBRLL
FFBBFBFRLR
FBFFBFBLRR
BFBBBFBRRL
FBBFFFBLLL
FBFBBBFLRL
FBFBBBFLRR
BBFBBBBLLR
BFFBBBFLLL
FFFFBBBRRR
FFBBFFFRLL
FFBBBFBLRR
FFFBFBBRLL
BBFFFFFRRR
FFBBBFBLLR
FFFBBFFLLL
FFFFBFFLRL
FFFFBBFRLR
BFBFBBFRLL
FFBFBFBLRR
FBBFFBBLLR
BBFBBBBRLL
FFFBFBFRRL
FBBFBFBRLR
FBBFBBBLRR
BFFBBBBLRL
FFFBBFFLRR
BFFFFBFRLR
FFBBBFFRLL
BFBFFFBRLL
BFBBFBFLRR
FFFFBBFRRR
FBFBBBBRLR
FBBBBBBRRL
BBFFBFBLLL
FBBFFBFLLR
BFBBBFFLRL
BBFBFFFLLR
BBFFBBBRRR
BFFBFBFRRR
FFBBBBBLLR
BBFBBBFRRR
FBBFBFFRRL
FBFFFBFRLR
BFFFBBBLLL
FBBFFBBRRL
FBBBBBFLRL
BBFBFFFLRL
FFFBFFFRLL
FFBFFBFRLL
BFFFBFFRRR
BFBBFFFRLR
BBBFFFFRLR
FBBBBFBLRR
BBFBFFBRLL
FBFFBBFLRR
BFFFBFFRLR
BFBFBBFRLR
BFFFBBBLLR
FBFBBFBRLR
FFBBBBFRLR
FBBBBFFRLL
BBFBFFBLRL
BFBFFBBLLL
FFBBFFBLRR
FBBBFFBLLL
BFFBFFBRRL
FBFFBBBRRL
FFBFBBFRRL
FBBFFBFRRR
FBBBBBFRLL
BBFBFBFRRR
FFFBBFFRRL
BFFFBBFRLL
FBFFBFBLRL
BFBBBFBLRL
FFFBBBFLRL
FFBBFBFLLL
BBFBFFBLLR
BFFFFFFRRL
BFFBFBBLRR
BFBFBBFLLR
FFBBBFFLLR
FBBFFBFRLR
FFFBBFBRLR
FBFFBFBLLL
FBBBBFBLLR
FFBBBFBLRL
BFFFFFBLLR
FBFFFFFLLR
FFFBFBBLLL
FFBBFFFLRR
BFFBFBFRLL
FBFBFBFLLR
FBFBFBBLLL
FBBFBFBLLR
BBFFFFFRRL
FBFFBFBRLL
FBBBFFFRLL
FBFBFBFRRL
BFFFFBBLRL
BBFBBFBLLL
BBFBBBBLRL
FBBBFBFRRL
FFFFBBFLLR
BFBFFFFLRL
BBFFFFBRRR
FFFFBBFLRL
BBFFFBFRLL
BFFFFBFLRL
BFFBFFBRRR
FBFBFFFRRR
FBFFBBBLRL
FFFBFBFRLR
FBBFFFFRLL
BBFBBFFRRR
FFBFFBBLLL
FFBFFFFLRL
BBFBBFFLRR
FBFBFFBLLR
FFBBFFFRRR
BBFBFFBLLL
FFFBFFFLLL
BFBFFBFRRL
FBBBFFFLLR
FBFBBBBLRR
FBFFBFFLRR
BBFFFFFRLR
FBBBFFBRRR
FFFBFFBRRR
FBFBFBBLLR
BFBBFFBRRR
BFFFFBBRLR
FBBFFBBLRR
BFFBFFBRLL
FFBBBFFRRR
BFFBFBBLLR
FBFBBFFRRL
FBFBFFBLLL
BFFFFFBLLL
BBFBBBFRLL
BFBBBBBRRR
BFFBBFBLRR
FFFFBBBLLR
BFFBFBBRRR
FBFFFFBLLL
FFBFBFBLRL
BFBFFFFLRR
BFBBFFBLRR
FFFBBBFRRR
FBBBBBBRRR
BFBFFBBLLR
FBBBFBFLLL
FBFFBBFRRR
FBBFBBBRRR
FFBFBBBRLL
BFBBBBBLRL
BFFBBFBRLR
FBFBBFBLRL
FBBFBFFLRR
BFFFFFBLRL
FFBBFFBLRL
FFFFBFFLLR
FBFBFBBRRR
FFBBFBFLLR
BFFBFFBLLL
FFFBFBBRLR
BFBFBBBLRL
BFBFFFFLLL
FFBBFBFRRR
FBFBBBBRRR
FBBBFFBLLR
BBFBFFFLLL
FBFBFBFRLR
FBFBFBBLRL
BFBBFFBLLR
FFBBBBBRRR
FFFFBFFLLL
BBFBFBBRLR
BFFBFBBLLL
BBFFBFBRLL
BFBBFBBRRL
BBBFFFBLLL
BBFFBFFRRL
FFFFBBBRLL
BFFFFFBRLL
BBFBFFFRRR
FFBFFBBRLL
BFFBBBBRLR
FFBBBBFRLL
FBBBBFBLLL
BFFFFBBRRL
BBFBBBFLRL
FBBFBBBRRL
FFFBBFFRLL
FFBBBFFLRR
FFBFFBFLRL
FFFBFFBRLR
FBFFFFBRLL
FBFFBBBLRR
FFFFBFBRLR
FBFBFBBLRR
BFBBFFFRRR
FBFBFBFLRL
FBBBFBBRLR
FFBBBFFRRL
FBFFFBBRLL
BBFFBFBLRL
BBFFFBBLRR
BFFBBBFRRR
BBFBFFFRLL
FFBBBBFLRR
FBFFBBFLLR
BFFFFBFLRR
FBFBBBFLLR
FFFBFBFLLR
FFBBFBBRLR
BBFBBFFRRL
BBFFBBFLLR
FFBFFBFLRR
FBFFBBBRRR
BFBFBBBRLL
FFBBFBFLRR
BFFBBFFRLL
BFFFFFFRLR
BBBFFFBRLR
BFBBBFBLLR
FBFFFFBLLR
FFFFBFBLRR
FBBBFBFRLL
FFBFBFBRRR
BBFFFBFLRL
FFBFFFFLRR
BBFBFBBRLL
BBFBFBFRLL
FBBBBFFLRL
BFFFBFBRLL
FFFFBFBLLR
FBBFFFBLRL
FBBBBFFLLL
BFBBFBBLRR
FBFBFFFRRL
FBBBFFFLLL
FBBBFBFRLR
BBFBBFBLRR
FBBFBBFRRR
FFBBBBBRRL
FFFBBBFRLL
BFFBBFFLLR
BFBBBFFRLL
BBFFFBBRRL
BFBBFBBRLL
BFBFBFFRRL
BFFBFBFLRR
FFBFBFBLLL
BBFFFBBLRL
BFBFBBFLRR
BBFBBFFLLL
BFFFFFFRRR
BFBBBBFRLL
FBBFBBFLRR
BFBFFBFRLL
FFBBFBBLRR
BFFBBFBRLL
BFBFFBFLRL
FFFBFBBLRR
BFBBBFBRRR
FFFFBFBLLL
FFBFBFFRLR
FFFFBBFLLL
FBFBBFFRRR
BBFFFFFRLL
BFBFBFFLLR
FFBBFFFLLR
FFBFFFFRLR
BFBBBFFRLR
BFFBBFFLRR
FBBFFFBRLL
FFBBBBBRLL
FFBFFBBLLR
FFFFBFBRRL
BFFBFBFLLL
FBBFBBBLRL
BBFBBFBRRL
FFBBBBFLRL
BFFFBBFLLR
FFFBFBFRLL
FFFBBBBRRR
FBFBBBFRRL
BFFFBBBRLR



`.trim()

// #endregion

const arr = input.split("\n");

function parsePass(s: string){
  const firstPart = s.slice(0, -3);
  const secondPart = s.slice(-3);
  const row = parseInt(firstPart.replace(/F/g, "0").replace(/B/g, "1"), 2)
  const seat = parseInt(secondPart.replace(/L/g, "0").replace(/R/g, "1"), 2)
  const id = row * 8 + seat;
  return id;
}

parsePass("BFFFBBFRRR");

console.log(
  arr.map(parsePass).sort((a, b) => a - b).map((x, i) => x - i + "," + x).join("\n")
)

