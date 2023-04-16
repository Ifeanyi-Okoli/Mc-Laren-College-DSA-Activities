//Print Subarray Until Negative
// printSubarrayUntilNegative.md
// Given the following nested array write code that prints all the non-negative numbers 
//in each sub-array that occur before a negative number.

// Tip: First do it for the first subarray and then write a loop to do it for all the subarrays

// CODE TEMPLATE

function printUntilNegative(arr){
for (let j = 0; j < arr.length; j++){

for (let i = 0; i < arr[j].length; i++){
    if (arr[j][i] >= 0){
        console.log(arr[j][i]);
    }
    else{
        break;
    }
}
}
}
let arr = [[1,2,-3,5],[5,0,-4,7,8],[-1,5,6],[4,5,-6,8,-9]];
printUntilNegative(arr);// should print 1 2 5 0 4 5