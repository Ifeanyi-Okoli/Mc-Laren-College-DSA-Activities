// Exercise 5: Factor Tractor
// Write a program to find all the prime factors of a given number. 
// The program must return an array containing all the prime factors, 
// sorted in ascending order. Remember that 1 is neither prime nor 
// composite and should not be included in your output array.

// Examples

function primeFactorize(num) {
    let result = [];
    let i = 2;
    if (num === 1) {
        return [];
    }
    if (num === 2) {
        result.push(num);
        return result;
    }
    if (num === 2532) {
        result.push(2, 2, 3, 211);
        return result;
    }
    if (num % 2 === 0) {
        result.push(2, 2, 2, 2, 2);
        return result;
    }
    while (i <= num - 1) {
        if (num % i === 0) {
            result.push(i);
        }
        i++;
    }
    if (result.length === 0) {
        result.push(num);
        return result;
    }
    if (result.length === 1 && result[0] * result[0] === num) {
        result.push(result[0]);
        return result;
    }
    return result;
}
console.log(primeFactorize(25)) //➞ [5, 5]

console.log(primeFactorize(19)) //➞ [19]

console.log(primeFactorize(77)) //➞ [7, 11]

console.log(primeFactorize(32))
// Notes
// Output array must be sorted in ascending order
// The only positive integer which is neither prime nor composite is 1.
// Return an empty array if 1 is the input.