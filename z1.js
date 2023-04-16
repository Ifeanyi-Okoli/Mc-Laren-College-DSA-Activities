// Given two arrays of integers, return the sum of elements that are NOT common (unique) in both 
//the arrays.

// For example:

// sumOfUniques([1,2,3],[5,3,2]) = 6 because 1 & 5 are not common in the two arrays

// sumOfUniques([1,2,7,3,8],[7,3,2,1]) = 8 because 8 is not common to both the arrays 

// CODE TEMPLATE

function sumOfUniques(arr1, arr2){
let sum = 0;
for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
        if (arr1[i] !== arr2[j]){
            sum = sum + arr1[i];
        }
    }
}
return sum;
}
console.log(sumOfUniques([1,2,3],[5,3,2])); //6
console.log(sumOfUniques([1,2,0,3],[5,3,2,1])); //5
console.log(sumOfUniques([1,2,0,3],[5,4,8,9])); //32
console.log(sumOfUniques([1,2,0,3],[0,1,3,2])); //0
console.log(sumOfUniques([1,2,7,3,8],[7,3,2,1]));//  8 
// Note:
// The arrays will not contain repeated elements