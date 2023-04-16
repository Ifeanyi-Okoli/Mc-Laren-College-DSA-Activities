// Exercise 1 - Is the Number Symmetrical?
// Create a function that takes a number as an argument and returns true or false depending on 
//whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

// Note: While calling the function isSymmetrical, we will only pass positive numbers.

// Examples
function isSymmetrical(num){
let numstr = "" + num;
let numarr = numstr.split("");
numarr.reverse();
let numstr2 = numarr.join("");
if(num === parseInt(numstr2)){
    return true;
}
return false;
}
console.log(isSymmetrical(7227));// ➞ true

console.log(isSymmetrical(12567));// ➞ false

console.log(isSymmetrical(44444444));// ➞ true

console.log(isSymmetrical(9939));// ➞ false

console.log(isSymmetrical(1112111));// ➞ true