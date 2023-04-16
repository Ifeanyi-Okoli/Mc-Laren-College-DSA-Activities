// Given an array of words, return a new array containing the length of each word using map method in arrays.

// Note: Documentation for map method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

let words = ["Bilbo", "Gandalf", "Nazgul"];

function calLength(word){
    return word.length;
}
let lengthArr = words.map(calLength);
console.log(lengthArr);