//Exercise 5 - How Many "Prime Numbers" Are There?
// Create a function that finds how many prime numbers there are, up to the given integer.

// Examples
function primeNumbers (num){
let count =1;
for (let i = 3; i <=num; i++){
    loop:
    for(let j = 2; j < i; j++){
        if(!(i % j)){
            break loop;
        }
        
        }
        count++;   
    }
    
    return count;
}

console.log(primeNumbers(10));// ➞ 4
// 2, 3, 5 and 7

console.log(primeNumbers(20));// ➞ 8
// 2, 3, 5, 7, 11, 13, 17 and 19

console.log(primeNumbers(30));// ➞ 10
// 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29

console.log(primeNumbers(100));//.toStrictEqual(25);
console.log(primeNumbers(200));//.toStrictEqual(46);
console.log(primeNumbers(1000));//.toStrictEqual(168);
console.log(primeNumbers(-5));//.toStrictEqual(0);
console.log(primeNumbers(66));//.toStrictEqual(18);
console.log(primeNumbers(133));//.toStrictEqual(32);
console.log(primeNumbers(99));//.toStrictEqual(25);