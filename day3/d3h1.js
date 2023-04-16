//expressionTracePractice.js
//Write an expression trace for lines 2, 5 & 8
let a = ((2 + 3) * 4 + 2) * (40 % 6);
console.log(a);

let b = 6 + 40 % 3 * 2;
console.log(b);

let c = 6 * 40 % 3 + 2;
console.log(c);
/*
EXPRESSION TRACE
LINE 2:
((2 + 3) * 4 + 2) * (40 % 6)
(5 * 4 + 2) * (40 % 6)
(20 + 2) * (40 % 6)
22 * (40 % 6)
22 * 4
88

LINE 5:
6 + 40 % 3 * 2
6 + 1 * 2
6 + 2
8

LINE 8:
6 * 40 % 3 + 2
240 % 3 + 2
0 + 2
2
*/