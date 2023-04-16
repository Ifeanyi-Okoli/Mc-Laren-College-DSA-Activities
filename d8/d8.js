// Day 8 Morning Challenge
// Deadline: 30 minutes

// Implement binary search
// Binary search is a powerful searching technique to search for a target element in a 
// sorted array. Your task is to implement the binary search to search for a given target 
// in a sorted array of numbers. If the element is present return the index of the elemeent 
// or return -1;

// Note:

// Array will only contain unique elements.
// Example:

function binarySearch(arr, num) {
    let d = Math.floor(arr.length / 2);
    while (d >= 0 && d < arr.length) {
        if (arr[d] === num) {
            return d;
        }
        else if (num > arr[d]) {
            d = Math.floor(d + d / 2)
        }
        else if (num < arr[d]) {
            d = Math.floor(d - d / 2)
        }
    }
    return -1
}
console.log(binarySearch([1, 2, 10, 11, 14], 2)); // 1
console.log(binarySearch([-1, 0, 1, 7, 9], 15)); // -1
console.log(binarySearch([8], 8)); // 0