//Object Diagram Expression Trace abcd
//objectDiagramExpessionTraceabcd.md
//Draw the Object Diagram and expression trace and Guess the output 
//for the following piece of code:

let a = 3;
let b = "a";
let c = 5;
c = (a + c) * c;
a = 2 * a - c;
b = b + "b";
let d = b + "c";
console.log(a, b, c, d);
/*
EXPRESSION TRACE
LINE 4:
(a + c) * c
(3 + c) * c
(3 + 5) * c
8 * c
8 * 5
40

LINE 5:
2 * a - c
2 * 3 - c
6 - c
6 - 40
-34

LINE 6: 
b + "b"
"a" + "b"
"ab"

LINE 7:
b + "c"
"ab" + "c"
"abc"

LINE 8: 
a, b, c, d
-34, b, c, d
-34, "ab", c, d
-34, "ab", 40, d
-34, "ab", 40, "abc"
*/