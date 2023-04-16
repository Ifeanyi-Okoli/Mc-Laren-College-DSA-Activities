//Exercise : Prime Numbers from a to b
// primeNumbersFromatob.md
// Given two numbers a and b, you have to print all the prime numbers between them 
//(including them). Note: a will always be less than b. Note: You have to reuse the 
//checkPrime function created earlier

function printPrime(a, b) {
    while (a <= b) {
        let result = checkPrime(a);
        if (result === true) {
            console.log(a);
        }
        a++;
    }
}

let a = 17;
let b = 30;
printPrime(a, b);
//output should be /* 17 19 23 29 */

function checkPrime(num) {
    if (num === 1 || num === 2) {
        return true;
    }
    let check = 2;
    while (check < num) {
        let result = num % check !== 0 ? true : false;
        if (result === false) {
            return result;
        }
        check++;
    }
    return true;
}