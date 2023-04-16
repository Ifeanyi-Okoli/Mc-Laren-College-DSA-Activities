//expressionTraceAlfSooKim.js
// Write an expression Trace for the following program.
let alf = 'hello';
let soo = 1 + 4 * 4;
let kim = '-';
alf = alf + kim;
soo++
soo = kim + soo % 5;
let ping = alf + (soo + 2 + 12  > -2200 );
console.log(ping);
alf = alf + ((3 * soo) <= (soo - 3));
console.log(alf); 
/*
EXPRESSION TRACE
LIME 5:
alf + kim
'hello' + kim
'hello' + '-'
'hello-'

LINE 6:
soo + 1
17 + 1
18

LINE 7:
kim + soo % 5
'-' + 18 % 5
'-' + 3
'-3'

LINE 8:
alf + (soo + 2 + 12 > -2200)


*/