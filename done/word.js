//Balanced Word
// balancedWord.md
// We can assign a value to each character in a word, based on their position in the alphabet 
// (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand 
// side of the word equals the sum of values on the right-hand side. For odd length words, the 
// middle character (balance point) is ignored.

// Write a function that returns true if the word is balanced, and false if it's not.

// HINT : you are given a string str = "abcdefghijklmnopqrstuvwxyz"

// Examples:

// balanced("zips") ➞ true

// // "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

// balanced("brake") ➞ false

// // "brake" = "br|ke" = 2+18|11+5 = 20|16 = false

function balanced(word){
let str = "abcdefghijklmnopqrstuvwxyz";
let len = word.length;
let sum1 = 0;
let sum2 = 0;
if (len === 1 || len === 2){
    return true;
}
if(len % 2 !== 0){
    len = len-1;
}
for (let i = 0; i < len/2; i++){
   sum1 = sum1 + str.indexOf(word[i]);
}
for (let j = len -1 ; j >= len/2; j--){
    sum2 = sum2 + str.indexOf(word[j]);
 }
 if (sum1 === sum2){
     return true;
 }
return false;
}
console.log(balanced("a"));//true
console.log(balanced("aa"));//true
console.log(balanced("zips"));// true
console.log(balanced("brake"));//false
console.log(balanced("azby"));//true