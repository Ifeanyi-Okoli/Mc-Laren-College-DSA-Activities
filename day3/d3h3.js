//Exercise : Expression Trace
//expressionTrace.js
// Write the expression trace for line 4
// Here is a gist link for the example of an expression trace
// https://gist.github.com/McLarenCollege/36c7cbf915f58d97f19b027a5abe9548
let b = (2 % 10) / 2 * 3 + (4 - 2 * 10);
console.log(b);
/*
EXPRESSION TRACE
LINE 4:
(2 % 10) / 2 * 3 + (4 - 2 * 10)
2 / 2 * 3 + (4 - 2 * 10)
2 / 2 * 3 + (4 - 20)
2 / 2 * 3 + (- 16)
2 / 2 * 3 - 16
1 * 3 - 16
3 - 16
-13
*/