//expressionTraceMultidimensionalArray.js
let yak = ['Hello', 3, [3, 'yes'], [false, 'hello']];
let result = yak[yak[2][0]][1];
console.log(result);

/*
EXPRESSION TRACE
yak[yak[2][0]][1]
yak[op1[0]][1]
yak[3][1]
op2[1]
hello
*/