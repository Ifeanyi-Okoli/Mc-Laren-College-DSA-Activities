//Exercise : Rotate 3 Numbers
//rotate3Numbers.md
//Write the code to rotate the values of the given three Numbers. 
//After rotation a will be assigned the value of c, 
//b will be assigned the value of a and c will be assigned the value of b. 
//Write the expression trace for the code and submit the object diagram.

//CODE TEMPLATE

let a = 1;
let b = 2;
let c = 3;
let temp = a;
a = c;
c = b;
b = temp;
console.log(a,b,c);// should print 3 1 2
/*
EXPRESSION TRACE
LINE 8:
a, b, c
3, b, c
3, 1, c
3, 1, 2
*/