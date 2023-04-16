// Part 1:

// Write 3 different functions to get minimum (min), maximum (max) and sum (sum) of all the elements from a given array. You need to use getMin, getMax, getSum in your function implementation.

function getMin(minSoFar, currElement) {
    return currElement < minSoFar ? currElement : minSoFar;
}

function getMax(maxSoFar, currElement) {
    return currElement > maxSoFar ? currElement : maxSoFar;
}

function getSum(sumSoFar, currElement) {
    return currElement + sumSoFar;
}
// Part 2:

// Re-write a new function called reduce which takes an array and a callback function. Callback function takes two numbers as a parameter and returns a new number. Here are 3 such callback functions given to you.

// Note: You should be able to call the reduce method like this:

let arr = [2, -1, 4, 3, 6];

function reduce(arr, reducerFunc) {
   // write your code here
}

arr.reduce(function(acc, reducer){

}, arr[0])