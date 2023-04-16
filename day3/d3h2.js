//Exercise: Experssion Trace 1
//expressionTrace.js
// Write an expression trace for the following code

let a = 1;
let b = 2;
let c = 3;
a = a + b;
b = b * c + a;
c = a + b / c + a * b;
console.log(a, b, c);
/*
EXPRESSION TRACE
LINE 6:
a + b
1 + b
1 + 2
3

LINE 7:
b * c + a
2 * c + a
2 * 3 + a
6 + a
6 + 3
9

LINE 8:
a + b / c + a * b
a + 9 / c + a * b
a + 9 / 3 + a * b
a + 3 + a * b
a + 3 + 3 * b
a + 3 + 3 * 9
a + 3 + 27
3 + 3 + 27
6 + 27
33

LINE 9:
a, b, c
3, b, c
3, 9, c
3, 9, 33
*/