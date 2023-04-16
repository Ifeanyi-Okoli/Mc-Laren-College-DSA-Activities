//Exercise : Find Minimum In Array
// findMinimumInArray.md
// Write a function to return the minimum of all the numbers given in an array

// Note: Dont use the inbuilt Math.min method

let arr = [-5, 4, 8, -15, 7, 9, 2];
function findMinimum(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMinimum(arr));// should return -15