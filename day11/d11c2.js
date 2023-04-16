//loopTrace.js
// Create a loop trace for the following piece of code
// Here is a sample loop trace for your reference: https://gist.github.com/McLarenCollege/1c9ab3a99fe631ddd65921107e68aeee

// Tip: Here is the first line of the loop trace:
// 1. while (5 <= 10), true, fromNum=5, toNum=10, sum=0

let fromNum = 5;
let toNum = 10;

let sum = 0;

while (fromNum <= toNum){
 if (fromNum % 3 === 0){
  sum += fromNum + 1;
 } 
 fromNum++;
}

console.log(sum);

/*
LOOP TRACE
1. while 5 <= 10, true, fromNum = 5, sum = 0
2. while 6 <= 10, true, fromNum = 6, sum = 0
3. while 7 <= 10, true, fromNum = 7, sum = 7
4. while 8 <= 10, true, fromNum = 8, sum = 7
5. while 9 <= 10, true, fromNum = 9, sum = 7
6. while 10 <= 10, true, fromNum = 10, sum = 17
7. while 11 <= 10, false, fromNum = 11, sum = 17

CONSOLE
17
*/