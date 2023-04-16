//Exercise : Detect Prime In Array
// detectPrimeInArray.md
// Given an array of numbers , write a function that detects if any of the numbers in the array is 
//prime or not. If it detects a prime number it returns true. If there are no prime numbers in the 
//array it returns false

// Note: You have to reuse the Check Prime function we created earlier

function detectPrime(arr){
    for (let i = 0; i < arr.length; i++){
        let result = checkPrime(arr[i]);
        if (result === true){
            return result;
        }
    }
    return false;
}
console.log(detectPrime([15,110,7,22,25]));// true
console.log(detectPrime([15,110,77,290,20]));// false

function checkPrime(num){
    if (num === 1 || num === 2){
        return true;
    }
    let check = 2;
    while (check < num){
       let result =  num % check !== 0 ? true : false;
            if (result === false){
            return result;
            }
        check++;
     }
    return true;
    }