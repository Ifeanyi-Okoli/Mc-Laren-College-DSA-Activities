// Exercise 4 - Do You Like Chicken Curry?
// Create a function that takes three collections of arguments and returns 
// the product of numbers.

// Examples:
function product (arr, arr1, arr2){
    let prod0=arr[0]*arr1[0]*arr2[0];
    let prod1=arr[1]*arr1[1]*arr2[1];
    let prodSum=prod0+prod1;
    return prodSum;
}

console.log(product([1, 2], [1, 1],[2, 3])); //➞ 8
// 1 * 1 * 2 + 2 * 1 * 3

console.log(product([10,2], [5,0], [2,3])); //➞ 100
// 10 * 5 * 2 + 2 * 0 * 3

console.log(product([1,2], [2,3], [3,4])); //➞ 30
// 1 * 2 * 3 + 2 * 3 * 4

console.log(product([1,2], [0,3], [3,0])); //➞ 0
// 1 * 0 * 3 + 2 * 3 * 0