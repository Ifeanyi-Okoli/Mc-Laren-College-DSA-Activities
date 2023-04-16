// Implement the function areArraysEqual that accepts two array as a parameter and checks if they 
// are equal or not using every method for arrays in JavaScript.

// Note:

// For two arrays to be called equal their length and value at each index should be same.
function areArraysEqual(arr1 = [], arr2 = []) {
    if (arr1.lenght !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

arr.every(areArraysEqual);