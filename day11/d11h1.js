//Loop Trace str
// loopTraceStr.js
// Create a loop trace for the following code and write the console outputs
let i = 1;
while (i <= 3) {
  let j = 1;
  let str = '';
  while (j <= i) {
    str += j;
    j++;
  }
  console.log(str);
  i++;
}  
/*
LOOP TRACE:
1. while 1 <= 3, true, i = 1
 1.1 while 1 <= 1, true, i = 1, j = 1, str = ''
 1.2 while 2 <= 1, false, i = 1, j = 2, str = '1'
 console.log(1)
2. while 2 <= 3, true, i = 2
 2.1 while 1 <= 2, true, i = 2, j = 1, str = ''
 2.2 while 2 <= 2, true, i = 2, j = 2, str = '1'
 2.3 while 3 <= 2, false, i = 2, j = 3, str = '12'
 console.log('12')
3. while 3 <= 3, true, i = 3
 3.1 while 1 <= 3, true, i = 3, j = 1, str = ''
 3.2 while 2 <= 3, true, i = 3, j = 2, str = '1'
 3.3 while 3 <= 3, true, i = 3, j = 3, str = '12'
 3.4 while 4 <= 3, false, i = 3, j = 4, str = '123'
 console.log('123')
*/