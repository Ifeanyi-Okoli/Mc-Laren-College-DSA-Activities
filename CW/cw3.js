// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function doTest(a, b){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let i = upper.includes(a);
    let j = upper.includes(b);
    let k = lower.includes(a);
    let l = lower.includes(b);
    if ((i && j) || (k && l)){
        return 1;
    }
    if((!(i) && k) && (i || k ) && (j || l) || (!(j) && l)){
        return 0;
    }
   if((!(i) && !(k)) || (!(j) && !(l)) || (!(i) && !(k) && (!(j) && !(l)) || (!(j) && !(l)) && (i || k))){
       return -1;
   }
  }

console.log(doTest('C', 'B'));//, 1);
console.log(doTest('b', 'a'));//, 1);
console.log(doTest('d', 'd'));//, 1);
console.log(doTest('A', 's'));//, 0);
console.log(doTest('c', 'B'));//, 0);
console.log(doTest('b', 'Z'));//, 0);
console.log(doTest('\t', 'Z'));//, -1);
console.log(doTest('H', ':'));//, -1);