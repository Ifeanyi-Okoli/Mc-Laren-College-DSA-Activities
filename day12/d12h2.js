//Exercise : Check All Prime in Array
// checkAllPrimeInArray.md
// Given an array of numbers , write a function that checks if all the numbers in the array are 
//prime or not. If all the numbers are prime the function returns true, otherwise it returns false.

// Note: You have to reuse the Check Prime function we created earlier

function checkAllPrime(arr){
    for (let i = 0; i < arr.length; i++){
        let result = checkPrime(arr[i]);
        if (result === false){
            return result;
        }
    }
    return true;
}
console.log(checkAllPrime([5,11,7,29,2]));// true
console.log(checkAllPrime([5,11,77,29,2]));// false

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