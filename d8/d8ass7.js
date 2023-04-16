// Exercise 7 - Shiny Semiprimes: Brilliant Numbers
// In this challenge, you have to establish if a given number is Brilliant. 
//A Brilliant number is a semiprime that can be obtained only by 
// multiplicating two, and only two, different primes with the same number of 
// digits.

// A semiprime can be:

// A composite number equal to the product of two different primes.
// A composite number equal to the square of a prime.
// Given an integer n, implement a function that returns true if n is a 
// Brilliant number, or false if it's not.

// Examples:
function checkPrime(a) {
    let k = 2;
    while (k < a) {
        if (a % k === 0) {
            return false;
        }
        k++;
    }
    return true;
}

function semiPrime(a, num) {
    let i = 2;
    while (i <= num) {
        if (a * i === num) {
            if (a < 10 && i < 10) {
                if (checkPrime(a) && checkPrime(i)) {
                    return true;
                }
                return false;
            }
            if (a > 9 && i > 9) {
                if (checkPrime(a) && checkPrime(i)) {
                    return true;
                }
                return false;
            }

        }
        i++;
    }
    return false;
}

function isBrilliant(num) {
    let i = 2;
    while (i <= num) {
        if (semiPrime(i, num)) {
            return true;
        }
        if (i * i === num) {
            return true;
        }
        i++;
    }
    return false;
}

console.log(isBrilliant(11)) //➞ false
// 11 is a prime.

console.log(isBrilliant(9)) //➞ true
// 9 is equal to the square of a prime: 3²

console.log(isBrilliant(21)) //➞ true
// 21 is equal to the product of two different primes: 3 x 7
// 3 and 7 have the same digital length.

console.log(isBrilliant(22)) //➞ false
console.log(isBrilliant(1001));//false
console.log(isBrilliant(1000));//false
console.log(isBrilliant(1003));//true
console.log(isBrilliant(768017));//true
// console.log(isBrilliant(348166));//false
console.log(isBrilliant(16459));//true
// 22 is equal to the product of two different primes: 2 x 11
// 2 and 11 have different digital lengths.
// Note:
// The given n will be a positive integer greater than 0.
// Remember that a Brilliant number is a semiprime that can be obtained only
// with a single combination of different primes having the same digital length.