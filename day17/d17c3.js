//indexOf.md
// Given an array

let alph = [ 'y', 'n', 'x', 'e', 'i', 'n', 'x', 'z', 'n']

// Task1
let vowels = [ "a", "e", "i", "o", "u"];
let vowelFound = false;
for (let i = 0; i < vowels.length; i++){
    if(alph.indexOf(vowels[i]) !== -1){
        vowelFound = true;
        console.log("vowel array")
        break;
    }
}
if (vowelFound === false){
console.log("consonant array");
}
// Using the indexOf method if the array contains a vowel print "VOWEL ARRAY" other wise 
//print "CONSONANT ARRAY".
// Task 2
// Refer the documentation of the indexOf Method and print the index of the second occurance 
//of the alphabet 'x'.

console.log(alph.indexOf("x"));
console.log(alph.indexOf("x" , alph.indexOf("x") + 1));
// Task 3
// Create a function that returns an array of the index numbers of all the occurances of the 
//alphabet 'n'
// let alph = [ 'y', 'n', 'x', 'e', 'i', 'n', 'x', 'z', 'n']
function findAllN(alphabets){
let indexn = [];
for (let i = 0; i < alph.length; i++){
    if (alph[i] === "n"){
        indexn.push(i);
    }
}
return indexn;
}
console.log(findAllN(alph)); // should return [1,5,8]