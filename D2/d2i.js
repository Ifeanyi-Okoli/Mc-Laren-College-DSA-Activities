// Return the Highest and Lowest Numbers
// Create a function that accepts a string of space separated numbers and returns the highest and 
//lowest number (as a string).

// Examples
console.log(highLow("1 2 3 4 5")); // should return "5 1"

console.log(highLow("1 2 -3 4 5")); // should return "5 -3"

console.log(highLow("1 9 3 4 -5")); // should return "9 -5"

console.log(highLow("13")); // should return "13 13"
// Notes
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highLow(str = "") {
    let nums = str.split(' ');
    let min = nums[0];
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
        }
        if (min > nums[i]) {
            min = nums[i];
        }
    }
    return Math.max(...nums) + " " + Math.min(...nums);
}