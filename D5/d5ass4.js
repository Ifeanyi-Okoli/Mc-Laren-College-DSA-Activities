// Exercise 4 - Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new 
//array without the strings.
function filterArray(arr) {
    let result = [];
    let notAString = (element) => typeof (element) !== "string";
    result = arr.filter(notAString);
    return result;
}


console.log(filterArray([1, 2, "a", "b"])) //➞ [1, 2]

console.log(filterArray([1, "a", "b", 0, 15])) //➞ [1, 0, 15]

console.log(filterArray([1, 2, "aasf", "1", "123", 123])) //➞ [1, 2, 123]
// Notes
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// Use .filter array method to solve this exercise.