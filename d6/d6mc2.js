// Exercise 2 - Is the Word an Isogram?
// An isogram is a word that has no duplicate letters. Create a function that takes a string and 
//returns either true or false depending on whether or not it's an "isogram".

// Examples
function isIsogram(str) {
    let str1 = str.toLowerCase();
    let obj = {};
    for (let i = 0; i < str1.length; i++) {
        if (obj.hasOwnProperty(str1[i])) {
            return false;
        }
        else {
            obj[str1[i]] = 1;
        }
    }
    return true;
}

console.log(isIsogram("Algorism"));// should return true

console.log(isIsogram("PasSword"));// should return false
// Not case sensitive.

console.log(isIsogram("Consecutive"));// should return false
// Notes
// Ignore letter case (should not be case sensitive).