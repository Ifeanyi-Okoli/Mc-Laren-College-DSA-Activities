//Exercise : Unshift Challenge
// unshift.md
// Write a function that inserts an element at the begining of an array and returns the 
//modified array.

// Note: You cannot create a new array

// CODE TEMPLATE

let arr = [5,10,9];
function unshift(arr,newVal)
{
 for (let i = arr.length - 1; i >= 0; i--){
    arr[i + 1] = arr[i]
 }
 arr[0] = newVal;
 return arr;
}
console.log(unshift(arr,20)); // should print [20, 5,10, 9]