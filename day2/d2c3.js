//Exercise : Expression Trace Greeting
//expressionTrace2.js
//Guess the output of the following code. Draw an Object Digram and write the expression trace
// Here is an example of an expression trace
//https://gist.github.com/McLarenCollege/54f031877f68d24ffc35388667433f78

let greeting = "hello";
let salutation = "goodbye";
let c = 4;
salutation = greeting;
c = c + 2;
greeting = c - 3;

console.log(greeting, salutation, c);
/*
EXPRESSION TRACE
LINE 9:
c + 2
4 + 2
6

LINE 10:
c - 3
6 - 3
3

LINE 12:
greeting, salutation, c
3, salutation, c
3, 'hello', 6
*/