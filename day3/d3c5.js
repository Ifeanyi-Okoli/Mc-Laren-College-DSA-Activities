//expressionTraceAlfSooKim.js
// Write an expression Trace for the following program.

let alf = 'hello';
let soo = 1 + 4 * 4;
let kim = '-';
alf = alf + kim;
soo++; // soo = soo + 1
soo = kim + soo % 5;
let ping = alf + (soo + 2 + 12  > -2200 );
console.log(ping);
alf = alf + ((3 * soo) <= (soo - 3));
console.log(alf);
/*
EXPRESSION TRACE
LINE 4:
1 + 4 * 4
1 + 16
17

LINE 6:
alf + kim
'hello' + kim
'hello' + '-'
'hello-'

LINE 8:
kim + soo % 5
kim + 18 % 5
kim + 3
'-' + 3
'-3'

LINE 9:
alf + (soo + 2 + 12  > -2200 )
alf + ('-3' + 2 + 12  > -2200 )
alf + ('-32' + 12  > -2200 )
alf + ('-3212'  > -2200 )
alf + false
'hello-' + false
'hello-false'

LINE 11:
alf + ((3 * soo) <= (soo - 3))
alf + ((3 * '-3') <= (soo - 3))
alf + (-9 <= (soo - 3))
alf + (-9 <= ('-3' - 3))
alf + (-9 <= - 6)
alf + true
'hello-' + true
'hello-true'
*/