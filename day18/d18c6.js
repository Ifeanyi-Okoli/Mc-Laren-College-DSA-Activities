//Create a function that creates a copy of the given array in reverse order.

// Note: The change made should not affect the original array.

function copyAndReverse(arr){
let result = [];
for (let i = arr.length-1; i >=0; i--){
    result.push(arr[i]);
}
return result;
}
let orig = [2, 5, 6, 4, 8];
let copy = copyAndReverse(orig);
console.log(copy);
console.log(orig);