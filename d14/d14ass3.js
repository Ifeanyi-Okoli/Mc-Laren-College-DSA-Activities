// Exercise 3 - SRhyme Time
// Create a function that returns true if two lines rhyme and false otherwise. 
//For the purposes of this exercise, two lines rhyme if the last word from each 
//sentence contains the same vowels.

// Examples


function doesRhyme(str1, str2){
    let vowels = ["a", "e", "i", "o", "u"];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    console.log(str2);
let arr1 = str1.split(" ");
let arr2 = str2.split(" ");
let a = arr1.length-1;
let b = arr2.length-1;
let arr1a=[];
let arr2a=[];
for (let i = 0; i < vowels.length; i++){
    if(arr1[a].includes(vowels[i])) arr1a.push(vowels[i]);
    if(arr2[b].includes(vowels[i])) arr2a.push(vowels[i]);
}
let str1a = arr1a.join("");
let str2a = arr2a.join("");
if(str1a === str2a) return true;
return false;
}

console.log(doesRhyme("Sam I am!", "Green eggs and ham."));// ➞ true

console.log(doesRhyme("Sam I am!", "Green eggs and HAM."));// ➞ true
// Capitalization and punctuation should not matter.

console.log(doesRhyme("You are off to the races", "a splendid day."));// ➞ false

console.log(doesRhyme("and frequently do?", "you gotta move."));// ➞ false
// Notes
// Case insensitive.
// Here we are disregarding cases like "thyme" and "lime".
// We are also disregarding cases like "away" and "today" (which technically rhyme, even though 
// they contain different vowels).