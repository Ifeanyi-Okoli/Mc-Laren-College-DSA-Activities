// Exercise 1 - Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element.
// The following is a factor chain:

// [3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12d6mc1
// 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.

// Examples
function factorChain(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        if (parseInt(arr[i + 1]) % parseInt(arr[i]) !== 0) {
            return false;
        }
    }
    return true;
}

console.log(factorChain([1, 2, 4, 8, 16, 32])); // should return true

console.log(factorChain([1, 1, 1, 1, 1, 1])); // should return true

console.log(factorChain([2, 4, 6, 7, 12])); // should return false

console.log(factorChain([10, 1])); // should return false