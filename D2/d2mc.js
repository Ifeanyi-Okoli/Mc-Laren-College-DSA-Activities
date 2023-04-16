// Challenge 1
// Create a function that takes a string and returns a string in which each character is repeated 
//once.

// Examples
console.log(doubleChar("String"));// should return "SSttrriinngg"

console.log(doubleChar("Hello World!"));// should return "HHeelllloo  WWoorrlldd!!"

console.log(doubleChar("1234!_ "));// should return "11223344!!__  "
// Notes:
// Don't use any inbuilt function like repeat

function doubleChar(str){
    let str1="";
    for (let i = 0; i < str.length; i++){
        str1= str1 + str[i]+str[i];
    }    
    return str1;
}