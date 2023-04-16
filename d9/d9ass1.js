// Exercise 1: The Array Twins
// Create a function that given an array, it returns the index where if 
//split in two-subarrays (last element of the first array has index of 
//(foundIndex-1)), the sum of them are equal.

// Examples

function twins(arr){
    let sum = arr.reduce((a,b) => a + b, 0);
    let b = sum/2;
    let total = 0;
    let index;
    for (let i = 0; i < arr.length; i++){
        if(total <=b){
            total = total+arr[i];
            index = i;
        }
    }
    return index;
}

console.log(twins([10, 20, 30, 5, 40, 50, 40, 15])) //➞ 5
// foundIndex 5 : [10+20+30+5+40]=[50+40+15]

console.log(twins([1, 2, 3, 4, 5, 5])) //➞ 4
// [1, 2, 3, 4] [5, 5]

console.log(twins([3, 3])) //➞ 1
// Notes
// Return only the foundIndex, not the divided arrays.

/*

console.log(
  [1, 2, 3, 4].reduce((a, b) => a + b, 0)
)
console.log(
  [].reduce((a, b) => a + b, 0)
)

*/