//Exercise 1 - Next Greater Element
// Given an array nums, print the Next Greater Element (NGE) for every element. 
// The Next greater Element for an element x is the first greater element on the right 
// side of x in the array.

// Elements for which no greater element exist, consider the next greater element as -1.

// Examples

function check(num, arr, index){
 for (let i = index+1; i <arr.length; i++){
     if(arr[i] > num){
         return arr[i];
     }
 }
 return -1;
}

function nextGreaterElement(arr){
    let res = [];
    for (let i = 0; i < arr.length; i++){
        res.push(check(arr[i], arr, i));
    }
    return res;
}
let arr =  [4, 5, 2, 25];
//Output: 5, 25, 25, -1


let arr1 = [13, 7, 6, 12];
// Output: -1, 12, 12, -1

console.log(nextGreaterElement(arr))
console.log(nextGreaterElement(arr1))
// Note
// Please solve this problem using concept of Stack. You don't need to create a 
// separate Stack class, instead you can use in-built array data structure.