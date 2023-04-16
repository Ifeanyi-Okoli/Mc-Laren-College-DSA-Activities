// Exercise 3 - Summing a Slice
// Given an array and an integer n, return the sum of the first n numbers in the array.

// Working Example
// Worked Example
// let sliceSum = (arr, num) =>
function sliceSum(arr, num) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i <= num - 1) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

console.log(sliceSum([9, 8, 7, 6], 3)); // should return 24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.
// Examples
console.log(sliceSum([1, 3, 2], 2)); // should return 4

console.log(sliceSum([4, 2, 5, 7], 4)); // should return 18

console.log(sliceSum([3, 6, 2], 0)); // should return 0
// Notes
// If n is larger than the length of the array, return the sum of the whole array.