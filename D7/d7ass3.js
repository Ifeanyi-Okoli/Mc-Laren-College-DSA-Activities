//Exercise 3 - Persistence
// The additive persistence of an integer, n, is the number of times you have to replace n 
// with the sum of its digits until n becomes a single digit integer.

// The multiplicative persistence of an integer, n, is the number of times you have to 
//replace n with the product of its digits until n becomes a single digit integer.

// Create two functions that take an integer as an argument and:

// Return its additive persistence.
// Return its multiplicative persistence.
// Examples: Additive Persistence

function additivePersistence(int){
 let strInt = "" + int;
 let count = 0;
 while (strInt.length >1){
     let sum = 0;
     for (let i = 0; i <strInt.length; i++){
        sum = sum + parseInt(strInt[i]);
     }
     count++;
     strInt = "" + sum;
 }
 return count;
}
console.log(additivePersistence(1679583)); //➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

console.log(additivePersistence(123456)); //➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

console.log(additivePersistence(6)); //➞ 0
// Because 6 is already a single-digit integer.
// Examples: Multiplicative Persistence
function multiplicativePersistence(int){
    let strInt = "" + int;
 let count = 0;
 while (strInt.length >1){
     let prod = 1;
     for (let i = 0; i <strInt.length; i++){
        prod = prod * parseInt(strInt[i]);        
     }
     count++;
     strInt = "" + prod;
 }
 return count;

}

console.log(multiplicativePersistence(77)); //➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

console.log(multiplicativePersistence(123456)); //➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

console.log(multiplicativePersistence(4)); //➞ 0
// Because 4 is already a single-digit integer.