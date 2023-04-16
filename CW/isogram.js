// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// function isIsogram(str){
//     let count = {};
//     for(let i = 0; i < str.length; i++){
//         let letter = str[i].toLowerCase();
//         if(!count[letter]){
//             count[letter] = 1;
//         }
//         return false;
//     }
//     return true;
//   }

//or

// function isIsogram(str) {
//     let count = {};
//     return !str.split("").some((letter) => {
//         letter = letter.toLowerCase;
//         if (!count[letter]) {
//             count[letter] = 1;
//             return false;
//         } else {
//             return true;
//         }
//     });
// }


//or

function isIsogram(str) {
    return new Set(str.toLowerCase()).size=== str.length;
}
console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false)