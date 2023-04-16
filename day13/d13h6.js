//Add To End Of Array
// addToEndOfArray.md
// Given an array write a function that adds a given number to the end of the array without using the .push method.

// CODE TEMPLATE

function addToEnd(arr,element){
arr[arr.length] = element;
}
let arr = [1,5,4,8,9];
let element = 7;
addToEnd(arr,element);
console.log(arr);