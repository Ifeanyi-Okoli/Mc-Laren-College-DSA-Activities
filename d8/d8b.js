// Given an unsorted array and a target sum find whether two elements in the array can sum to target sum. Also write the time complexity of your code.

// Example:

// Input:
// arr = [1, 3, 10, 23, 15], sum = 26

// Output:
// true

// Explanation: 3 and 23 can sum to 26.
// function calce(num, arr){
//     if(num + arr[i] === 0)
// }

function canSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return true;
      }
    }
  }
  return false;
}
console.log(canSum([1, 3, 10, 23, 15], 26));// true
console.log(canSum([7, 5, 8, 0, 3], 7));// true
console.log(canSum([7, 5, 8, 0, 3], 14));// false
//Time complexity of the program is O(n^2)