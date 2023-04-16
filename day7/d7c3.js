let a = false === false;
let b = true !== false;
let c = (!(a || b) ? 'Hello' : '6') + 7;
console.log(c);
/*
EXPRESSION TRACE
LINE 1:
false === false 
true

LINE 2:
true !== false
true
LINE 3:
(!(a || b) ? 'Hello' : '6') + 7
(!(true || true) ? 'Hello' : '6') + 7
(!(true) ? 'Hello' : '6') + 7
(false ? 'Hello' : '6') + 7
'6'+ 7
'67'
*/