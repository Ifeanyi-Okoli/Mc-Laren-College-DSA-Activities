// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    //check if n > 9
    while (n > 9) {
        let sum = 0;
        while (n > 0) {
            //mod the number by 10 to get the last digit
            let lastDigit = n % 10
            //use Math.floor of n to take out the last digit
            n = Math.floor(n / 10)
            //add last digit to sum
            sum += lastDigit;
        }
        //reassign sum to n
        n = sum;
    }
    return n;

}

//or

// function digital_root(n) {
//      while (n > 9) {
//         n = n.toString().split("").reduce((sum, digit) => sum + +digit, 0);
//     }
//     return n;
// }

//or

function digital_root(n) {
    
   return (n-1)%9 + 1;
}

console.log(digital_root(16));//, 7 )
console.log(digital_root(456));//, 6 )