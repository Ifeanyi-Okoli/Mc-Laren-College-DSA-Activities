//Write a function that calculates the average of the numbers in an array using all 3 different 
//function declaration syntax. Each function will accept one array parameter called arr.

// Functions should be named as following:
function calcAverage1(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum +=arr[i];
    }
    return sum / arr.length;
}

let calcAverage2 = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum +=arr[i];
    }
    return sum / arr.length;
}

let calcAverage3 = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum +=arr[i];
    }
    return sum / arr.length;
}

let arr = [23, 1, 15, 9];
console.log(calcAverage1 (arr));
console.log(calcAverage2 (arr));
console.log(calcAverage3 (arr));
// Test your code with the array as [23, 1, 15, 9]

// NOTE: Gist link for different function declaration syntax: https://gist.github.com/McLarenCollege/c2bc43e16d2a5e3cb93dc1eb8ec4f069