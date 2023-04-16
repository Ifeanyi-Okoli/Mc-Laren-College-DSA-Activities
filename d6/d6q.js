// Part 1:
// Write the code to find the tree (bestTree) which has more than 5 count using 
//built-in find method.

let evergreens = [
    { name: "cedar", count: 2 },
    { name: "fir", count: 6 },
    { name: "pine", count: 3 }
];


let bestTree = evergreens.find(isBestTree); // This should point to the final answer
function isBestTree(arr) {
    return arr.count > 5;
}
console.log(bestTree);

// Part 2:
// Find the index of first even number (firstEven) using findIndex built-in method.

let nums = [11, 7, 3, 1, 12, 14, 13, 18];
let isFirstEven = (element) => element % 2 === 0;
let firstEven = nums.findIndex(isFirstEven); // This should point to the final 
console.log(firstEven);
// Part 3:
// Use every method to check if an array is fabulous or not. We call an array fabulous if all it's 
//elements are even and multiples of 3.

function isFabulous(arr) {
    // let firstEL = arr[0]
    let iseveryFab = (slot) => (slot % 3 === 0 && slot % 2 === 0);

    return arr.every(iseveryFab);
}
let arr1 = [228, 4782, 171];
console.log(isFabulous(arr1)); // should return true


//const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));