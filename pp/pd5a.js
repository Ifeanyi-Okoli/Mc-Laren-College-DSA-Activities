//Value Of Sentence
// valueOfSentence.md
// Each letter in a sentence is worth its position in the alphabet (i.e. a = 1, b = 2, c = 3, 
//etc...). However, if a word is all in UPPERCASE, the value of that word is doubled.

// Create a function which returns the value of a sentence.

// HINT: you can create a variable like let alphabets = "abcdefghijklmnopqrstuvwxyz" and use 
//alphabets.indexOf(char)+1 to calculate the value of a character.

// Examples:

// getSentenceValue("abc ABC Abc") ➞ 24 // a = 1, b = 2, c = 3

// abc = 1 + 2 + 3 = 6 // ABC = (1+2+3) * 2 = 12 (ALL letters are in uppercase) // 
//Abc = 1 + 2 + 3 = 6 (NOT ALL letters are in uppercase)

// 6 + 12 + 6 = 24

function getSentenceValue(sentence){
let alphabets ="abcdefghijklmnopqrstuvwxyz";
let a = 0;
let b;
let sentence1 = sentence.toLowerCase();
console.log(sentence);
for (let i = 0; i< sentence1.length; i ++){
    b = alphabets.indexOf(sentence1[i])+1;
    a += b;
}
return(a);
}
console.log(getSentenceValue("aaa aaa")); // 6
console.log(getSentenceValue("aaa AAA")); // 9
console.log(getSentenceValue("aaa Aaa")); // 6
console.log(getSentenceValue("HELLO world")); // 176
console.log(getSentenceValue("Javascript is LEGENDARY"));//329
console.log(getSentenceValue("Her seaside sea-shelling business is really booming!")); //488
// Notes:

// Ignore spaces and punctuation.

// Remember that the value of a word isn't doubled unless all the letters in it are uppercase.