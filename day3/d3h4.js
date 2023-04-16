//Exercise : Compound Expression Trace
//compoundExpressionTrace.js
// Write an expression trace for Line 4 , Line 6 and Line 6
// Here is a gist link for the example of an expression trace
// https://gist.github.com/McLarenCollege/36c7cbf915f58d97f19b027a5abe9548
let a = (( 13 % 3) + 5 * 3 ) % 5 + 3;
let b = ( 5 * 3 ) % 2;
console.log( a, b, b % a, a % b);
/*
EXPRESSION TRACE
LINE 4:
(( 13 % 3) + 5 * 3 ) % 5 + 3
(1 + 5 * 3 ) % 5 + 3
(1 + 15) % 5 + 3
16 % 5 + 3
1 + 3
4

LINE 5:
( 5 * 3 ) % 2
15 % 2
1

LINE 6:
a, b, b % a, a % b
4, b, b % a, a % b
4, 1, b % a, a % b
4, 1, 1 % a, a % b
4, 1, 1 % 4, a % b
4, 1, 1, a % b
4, 1, 1, 4 % b
4, 1, 1, 4 % 1
4, 1, 1, 0

*/