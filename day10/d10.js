//functionTraceFooBarSamp.js
// Create a function trace for the following piece of code
function foo(a, b) {
    return bar(a > b, b === a, b !== a);
}
function bar(a, b, c) {
    return !zoo(samp(a, b), c);
}
function samp(x, y) {
    return x || y;
}
function zoo(m, n) {
    return m && n;
}
let res = foo(1, 2);
console.log(res);


/*
FUNCTION TRACE
foo(1, 2)
  bar(false, false, true)
    samp(false, false)
      return false
    zoo(false, true)
      return false
    return true
  return true      
console.log(true)
*/