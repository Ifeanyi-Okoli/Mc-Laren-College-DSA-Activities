// Given an array containing numbers, calculate the sum of all the elements in the array using recursion.

function arraySum(arr) {
    let sum = 0;
    let i = arr.length-1;
    if (i-1 === 0){
        console.log(sum);
        return
    }
    sum = sum + arr[i];
    i--;
    arraySum(arr);
}

console.log(arraySum([1,2,3])); // should print 6
