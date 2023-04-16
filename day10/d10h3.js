//Print Pattern Using While Loop
// printPatternWhileLoop.md
// Given the number of rows ,create a function to print the following pattern using a while loop.

// CODE TEMPLATE
function printPattern(num){
let result = "";
let output = "";
let star = 0;
while (star < num){
    result += "*";
    output = output + "\n" + result;
    star++;
}
return output;
}
console.log(printPattern(4));
console.log(printPattern(3));
// should print

// *
// **
// ***
// ****
// *
// **
// ***