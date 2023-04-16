// Exercise 3 - Do All Bigrams Exist?
// You are given an input array of bigrams, and an array of words.

// Write a function that returns true if every single bigram from this array 
//can be found at least once in an array of words.

// Examples:
function check(str, arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i].includes(str)){
            return true;
        }
    }
    return false;
}


function canFind(arrb, arrw){
    for (let i = 0; i < arrb.length; i++){
        if(!(check(arrb[i], arrw))){
            return false
        }
    }
    return true;
}
console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"])) //➞ true

console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"])) //➞ false
// # "cu" does not exist in any of the words.

console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"])) //➞ true

console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"])) //➞ false
// Note:
// A bigram is string of two consecutive characters in the same word.