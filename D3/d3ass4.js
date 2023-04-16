// Exercise 4 - Array Operation
// Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. 
// Return an empty array if there are no numbers that are divisible by n.
function arrayOperation(num1, num2, num3) {
    let i = num1;
    let result = [];
    while (i <= num2) {
        if (i % num3 === 0) {
            result.push(i);
        }
        i++;
    }
    return result;
}

// Examples
console.log(arrayOperation(1, 10, 3)); // should return [3, 6, 9]

console.log(arrayOperation(7, 9, 2)); // should return [8]

console.log(arrayOperation(15, 20, 7)); // should return []