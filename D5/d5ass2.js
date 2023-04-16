//Exercise 2 - Measure the Depth of Emptiness
// In this challenge you will receive an input of the form:

[[[[[[[[[[[]]]]]]]]]]]
// In other words, an array containing an array containing an array containing... an array containing 
// nothing.

// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

// Examples 
// function measureDepth(arr){
// let count = 0;
// if (arr[0]=== [])
// }

function measureDepth(arr) {
    return Array.isArray(arr) ? 
      1 + Math.max(0, ...arr.map(measureDepth)) :
      0;
  }

 
console.log(measureDepth([])); // should return 1

console.log(measureDepth([[]])); // should return 2

console.log(measureDepth([[[]]])) // should return 3

console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])) // should return 11