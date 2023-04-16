// Challenge 2
// Write a function which takes a string and returns a string in the reverse order that it was given
function reverseString(word) {
    let str = "";
    for (let i = word.length-1; i >= 0; i--){
        str +=word[i];
    }

return str;
}
console.log(reverseString("mnowhrtfnsaiakd"));