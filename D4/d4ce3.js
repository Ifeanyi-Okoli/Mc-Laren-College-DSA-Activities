//Write a function named firstNonRepeatingLetter that takes a string input, and returns the first 
//character that is not repeated anywhere in the string.

// You can assume that the string that is passed to the function is always in lowercase.

// If a string contains all repeating characters, it should return an empty string ("").

// Example
function firstNonRepeatingLetter(str){
    let obj = {};
    for (let i = 0; i < str.length; i++){
        if (obj[str[i]] === undefined){
            obj[str[i]]= 1;
        }
        else{
            obj[str[i]]++;
        }
    }
    for(j in obj){
        if(obj[j] === 1){
            return j;
        }
    }
    return "";
}

console.log(firstNonRepeatingLetter('stress')); // returns 't' since the letter t only occurs once in the string, and occurs first in the string.
