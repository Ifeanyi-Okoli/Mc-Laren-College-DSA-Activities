//Exercise 6 - Count Number of Identical Arrays
// Create a function that takes four arrays as arguments and returns a count of the total 
//number of identical arrays.

// Examples
function countIdenticalArrays(arr1, arr2, arr3, arr4) {
let arr = [];
arr.push(arr1);
arr.push(arr2);
arr.push(arr3);
arr.push(arr4);
let count = 0;
let sum = 0
for (let i = 0; i < arr.length-1; i++){
    if(checkIdentical(arr[i], arr[i+1])){
        count++;
    }
}
for (let i = 0; i < arr.length-2; i++){
    if(checkIdentical2(arr[i], arr[i+2])){
        sum++;
    }
}
if((!(sum> 0) && count>0) || (!(count> 0) && sum>0) ){
    return sum + count + 1;
}
return sum + count;
}

function checkIdentical(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function checkIdentical2(arr1, arr3) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr3[i]) {
            return false;
        }
    }
    return true;
}

console.log(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]));// ➞ 2

console.log(countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0])); //➞ 0

console.log(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]));// ➞ 3
// Notes
// Don't forget to return the result.
// Only 1 of the inputs array will be repeated