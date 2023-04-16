//Expression Trace xyz
// expressionTracexyz.md
// Write an expression Trace for the following codes

let x = ((2 + 3) * 4 + 2) * (40 % 6);
console.log(x);
let y = 6 + 40 % 3 * 2;
console.log(y);
let z = 6 * 40 % 3 + 2;
console.log(z);
/*
EXPRESSION TRACE
((2 + 3) * 4 + 2) * (40 % 6)
((5) * 4 + 2) * (40 % 6)
(20 + 2) * (40 % 6)
(22) * (40 % 6)
(22) * (4)
88


6 + 40 % 3 * 2
6 + 1 * 2
6 + 2
8


6 * 40 % 3 + 2
240 % 3 + 2
0 + 2
2
*/