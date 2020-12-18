/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { add, raceGens } from "./helpers";

export {}

// #region input

let input = `
103
131
121
151
118
12
7
2
90
74
160
58
15
83
153
140
166
1
148
33
165
39
100
135
68
77
25
9
54
94
101
55
141
22
97
35
57
117
102
64
109
114
56
51
125
82
154
142
155
45
75
158
120
5
19
61
34
128
106
88
84
137
96
136
27
6
21
89
69
162
112
127
119
161
38
42
134
20
81
48
73
87
26
95
146
113
76
32
70
8
18
67
124
80
93
29
126
147
28
152
145
159
`.trim()

// #endregion

const testInput = `


28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3
`.trim();

// input = testInput;

const lines = input.split("\n").map(x => +x).sort((a, b) => a - b);
const device = Math.max(...lines) + 3
lines.push(device);

const lasts = new Map<number, number>([[0, 1]]);

for(let num of lines)
  lasts.set(num, [...lasts.entries()].filter(([l]) => num - l <= 3).map(([, n]) => n).reduce(add, 0));

console.log(lasts.get(device));
