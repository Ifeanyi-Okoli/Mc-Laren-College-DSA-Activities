//Exercise Name : Function Trace Foo Bar
//FunctionTraceFooBar.js
//FUNCTION TRACE 3
// Requirements: Create a trace output file showing each function call 
// including parameter values, and each return value.  You should be able 
// to step through with pen and paper - do not run the code on your computer

// Tip: To refresh your memory of how to write trace output, see this gist:
// https://gist.github.com/McLarenCollege/e276ecc7dc3485a483be469f61dfd671

function foo(koo, y) {
    if ((koo % 3) !== 0) {
        return y === 'hellomax';
    }
    else {
        return 'max';
    }
}

function bar(x) {
    let y = 'hello';
    if (x + 10 >= 19) {
        y = foo(6, x) + y;
    }
    else {
        y = y + 'yooo';
    }
    return y;
}

console.log(!foo(5, bar(10)));
/*
FUNCTION TRACE
bar(10)
  foo(6, 10)
    return 'max'
  return "maxhello"

foo(5, "maxhello")
  return false
*/