//Total Length of Nested SubArray
// lenght-of-nested-subarray.md
// Given a nested array write a function that returns the total length of the nested subarrays.

// CODE TEMPLATE

function totalLength(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length;
    }
    console.log(sum);
}
let arr = [[1, 2, 3], [], [false, 'vivek'], []];
totalLength(arr);//5
