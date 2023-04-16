let a = 3 + 4 > 5
console.log(a);
let a = 3 < 4 - 1 || 4 >= 5
console.log(a);
let a = 3 < 4 - 1 || (4 >= 5 && 5 === 6)
console.log(a);
/*
EXPRESSION TRACE
LINE 1:
3 + 4 > 5
7 > 5
true


LINE 3:
3 < 4 - 1 || 4 >= 5
3 < 3 || 4 >= 5
false || 4 >= 5
false || false
false

LINE 5:
3 < 4 - 1 || (4 >= 5 && 5 === 6)
3 < 4 - 1 || (false && 5 === 6)
3 < 4 - 1 || (false && false)
3 < 4 - 1 || false
3 < 3 || false
false || false
false
*/