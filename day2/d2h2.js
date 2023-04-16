// Expression Trace Undefined NaN
// expressionTraceN.js
// Draw the object diagram and write an expression trace for lines 6 and 7
// Include a picture of your diagram in your airable submission
let a = 5;
let b;
let c = 2;
c = c + a % b;
console.log(a, b, c);
/*
EXPRESSION TRACE
LINE 6:
c + a % b
c + 5 % b
c + 5 % undefined
c + NaN
2 + NaN
NaN

LINE 7:
a, b, c
5, b, c
5, undefined, c
5, undefined, NaN
*/