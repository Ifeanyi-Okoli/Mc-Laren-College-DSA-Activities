// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// function toCamelCase(str){
// for(let i = 0; i <str.length; i++){
//     let letter = str[i];
//     if(letter === "-" || letter === "_"){
//         str = str.replace(str[i+1], str[i+1].toUpperCase()).split("_").join("");
//     }
// }
// console.log(str);
// }


//or

// function toCamelCase(str) {
//     return str.split(/-|_/g).reduce((camelCase, word, index) => {
//         return index === 0 ? word : camelCase + word[0].toUpperCase() + word.slice(1);
//     }, "");
// }


//or

// function toCamelCase(str){
//     let words = str.split(/-|_/g);
//     let camelCase = words[0];
//     // console.log(words);
//     for(let i = 1; i <words.length; i++){
//         let word = words[i];
//         camelCase += word[0].toUpperCase() + word.slice(1);
//     }
//     return camelCase;
//     }


//or

// function toCamelCase(str) {
//     return str.split(/-|_/g).reduce((camelCase, word, index) => index === 0 ? word : camelCase + word[0].toUpperCase() + word.slice(1), "");
        
// }

//or

let capitalize = (word)=> word[0].toUpperCase() + word.slice(1);
function toCamelCase(str) {
return str.split(/-|_/g).reduce((camelCase, word, index) => index === 0 ? word : camelCase + capitalize(word), "");        
}


console.log(toCamelCase(''), '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")