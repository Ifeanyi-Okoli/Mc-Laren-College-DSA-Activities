// Part 1:

// Write 3 different functions to get minimum, maximum and sum of all the elements from a given 
//array. You need to use getMin, getMax, getSum in your function implementation.

function getMin(minSoFar, currElement) {
    return currElement < minSoFar ? currElement : minSoFar;
}

function getMax(maxSoFar, currElement) {
    return currElement > maxSoFar ? currElement : maxSoFar;
}

function getSum(sumSoFar, currElement) {
    return currElement + sumSoFar;
}

function minimum(arr){
    let accumulator = arr[0];
    for (let i = 0; i < arr.length; i++){
         accumulator = getMin(accumulator, arr[i])
    }
    return accumulator;
}

function maximum(arr){
    let accumulator = arr[0];
    for (let i = 1; i < arr.length; i++){
         accumulator = getMax(accumulator, arr[i])
    }
    return accumulator;
}

function sum(arr){
    let accumulator = arr[0];
    for (let i = 1; i < arr.length; i++){
         accumulator = getSum(accumulator, arr[i])
    }
    return accumulator;
}
// Part 2:

// Re-write a new function called reduce which takes an array and a callback function. Callback function takes two numbers as a parameter and returns a new number. Here are 3 such callback functions given to you.

// Note: You should be able to call the reduce method like this:

let arr = [2, -1, 4, 3, 6];

function reduce(arr, reducerFunc) {
   let accumulator = arr[0];
   for (let i = 1; i < arr.length; i++){
    accumulator = reducerFunc(accumulator, arr[i])
}
return accumulator;
}

console.log(reduce(arr, getMin));
console.log(reduce(arr, getMax));
console.log(reduce(arr, getSum));