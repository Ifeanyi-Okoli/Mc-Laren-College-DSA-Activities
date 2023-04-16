/*
Given a string, count total number of consonants in it using recursion. A consonant is a 
//English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are 
b, c, d, f, g, ...
*/

function noOfConsonants(str) {
    let vowels = "aeiou";
    let count = 0;
    let length= str.length-1;
    if(length = 0){
        return count
    }
    if(!(vowels.includes(str[length]))){
        count++;
    }
    length--;
    noOfConsonants()
    return count;
  }
  
  console.log(noOfConsonants('vivek')); // should return 3