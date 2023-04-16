// Exercise : False True
// inClassChallengeFalseTrue.md
// Given an array of booleans update the first chunk of false values to true until you reach 
//a true value or undefined.

// For example:

let arr = [false, false, false, true, false, false, true];
// let i = 0;
// while (i < arr.length){
//     if (arr[i] === true){
// console.log(arr);
// break;
//     }
// else {
//     arr[i] = true;
// }
// i++;
// }
// console.log (arr)

// Output: [true,true,true,true,false,false,true]

// arr = [false,false,false];
// Output: [true,true,true]

//or

let i = 0;
while (arr[i] === false) {
    arr[i] = true;
    i++;
}
console.log(arr);