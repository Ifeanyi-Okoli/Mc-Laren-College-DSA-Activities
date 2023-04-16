//Write an expression trace for the following code:

let a = 3;
let b = 2;
let c = true;
a =  c || a > b + 6 - 2 * a;
console.log(a);
/*
EXPRESSION TRACE
LINE 4:
c || a > b + 6 - 2 * a
true || 3 > 2 + 6 - 2 * 3
true || 3 > 2 + 6 - 6
true || 3 > 8 - 6
true || 3 > 2
true || true
true
*/