//Given an array of numbers, if the first number in the array is even then 
//sort the array in ascending order and return the sorted array otherwise 
//change the value of the element at 0th index to be 0 and return the array. 
//Also write the time complexity of the code.

// Note: Inbuilt sort method has O(Nlog(N)) time complexity.

function updateArr(arr) {
if (!(arr[0]%2)){
    arr.sort(a-b)
    return arr;
}
arr.splice(0,1,0);
return arr;
}
console.log(updateArr([10, 5, 1, 8, -7, 0]));// should print [-7, 0, 1, 5, 8, 10]
console.log(updateArr([1, 5, 1, 8, -7, 0]));// should print [0, 5, 1, 8, -7, 0]
console.log(updateArr([2,-7]));// should print [-7, 2]
console.log(updateArr([1]));// should print [0]