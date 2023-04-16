//Object Diagram Expresson Trace ab
// objectDiagramExpressionTraceab.md
// Draw an Object Diagram and expression trace for the following piece of code and 
//guess the output

let a = 'a';
let b = 5;
a = a + 'b';
b = b + 5;
let c = b + '1';
a = a + c;
b = b + c;
console.log(a,b);
/*
EXPRESSION TRACE
LINE 3:
a + 'b'
'a' + 'b'
'ab'

LINE 4:
b + 5
5 + 5
10

LINE 5:
b + '1'
10 + '1'
'101'

LINE 6:
a + c
'ab' + c
'ab' + '101'
'ab101'

LINE 7: 
b + c
10 + c
10 + '101'
'10101'

LINE 8:
a, b
'ab101', b
'ab101', '10101'
*/