// Example
// Write a function which takes in a string `name` and returns 'Hello, name'
function greeting(name){
  
}

// Challenge 1
// Write a function which takes a list of numbers and returns them in reverse order
// Do not use the inbuilt `reverse` function.
function reverseList(numbers) {
    let res = [];
    for (let i = numbers.length - 1; i >= 0 ; i--){
        res.push(numbers[i]);
    }
    return res;
}

console.log(reverseList([21, 54, 7, 9, 20]));

// Challenge 2
// Write a function which takes a string and returns a string in the reverse order that it was given
function reverseString(word) {
    let str = [];
    for (let i = word.length-1; i >= 0; i--){
        str.push(word[i]);
    }
let str1 = str.join('');
return str1;
}
console.log(reverseString("mnowhrtfnsaiakd"));