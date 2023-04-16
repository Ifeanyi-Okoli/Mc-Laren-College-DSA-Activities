//Given an array

let alph = [ 'y', 'n', 'x', 'e', 'i', 'n', 'x', 'z', 'n']
//Using the includes method if the array contains a vowel print "VOWEL ARRAY" other wise print 
//"CONSONANT ARRAY".

let vowels = ["a", "e", "i", "o", "u"]
let vowelFound = false;
for (let i = 0; i < vowels.length; i++){
    if(alph.includes(vowels[i]) === true){
        vowelFound = true;
        console.log("vowel array")
        break;
    }
}
if (vowelFound === false){
console.log("consonant array");
}