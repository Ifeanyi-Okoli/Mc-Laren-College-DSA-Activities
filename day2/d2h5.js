//Exercise : Expression Trace 2 lines
//exTrace3.js
// Write an expression trace for the line 2, 3 and 4
let a = 20 / 5 + (3 % (5 * 3));
let b = (1 + (a % 7)) / (a + 1);
console.log(a, b);
/*
EXPRESSION TRACE
LINE2:
20 / 5 + (3 % (5 * 3))
20 / 5 + (3 % 15)
20 / 5 + 3
4 + 3
7

LINE 3:
(1 + (a % 7)) / (a + 1)
(1 + (7 % 7)) / (a + 1)
(1 + 0) / (a + 1)
1 / (a + 1)
1 / (7 + 1)
1 / 8
0.125

LINE 4:
a, b
7, b
7, 0.125
*/