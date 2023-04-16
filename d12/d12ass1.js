// Exercise 1 - Sum Fractions
// Create a function that takes an array containing nested arrays as an argument. 
//Each subarray has 2 elements. The first element is the numerator and the second element 
//is the denominator. Return the sum of the fractions rounded to the nearest whole number.

// Examples

let sumFractions=(arr)=>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += (arr[i][0]/arr[i][1]);
    }
    return Math.round(sum);
}

console.log(sumFractions([[18, 13], [4, 5]]));// ➞ 2

console.log(sumFractions([[36, 4], [22, 60]]));// ➞ 9

console.log(sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]));// ➞ 11

console.log(sumFractions([[-11, 12], [18, 13], [4, 5]]));//.toStrictEqual(1)
console.log(sumFractions([[11, 12], [18, 13], [4, 5]]));//.toStrictEqual(3)
    
console.log(sumFractions([[41, 14], [10, 91]]));//.toStrictEqual(3)
// Notes
// Use reduce to solve this problem.
// Your result should be a number not string.