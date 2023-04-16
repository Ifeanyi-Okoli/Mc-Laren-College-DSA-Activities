//Exercise: Array Total Functions
// arrayTotalFunctions.md
// Part 1
// Write a function called addTotal which takes an array of 4 numbers, 
//adds the total to the end of the array and returns the modified array.

// CODE TEMPLATE

function addTotal(arr) {
    let total = arr[0] + arr[1] + arr[2] + arr[3];
    arr[4] = total;
    return arr;
}
let arr = [1, 2, 3, 4];
console.log(addTotal(arr));



// Part 2
// Write a function called 'addTotalsToGrid' which takes an array of 3 subarrays, 
//where each sub-array has 4 numbers. The function should add the total to the end of 
//each sub-array and returns the array. You should call the function in Part 1 three times.

// Tip: To start, create a variable called 'sub' and point it to the first element in the given array.

// CODE TEMPLATE

function addTotalsToGrid(grid) {
    let sub = grid[0];
    let sub1 = grid[1];
    let sub2 = grid[2];
    sub = addTotal(sub);
    sub1 = addTotal(sub1);
    sub2 = addTotal(sub2);
    return grid;
}
let myGrid = [[1, 2, 3, 4], [0, 0, 1, 0], [10, 12, 5, 10]];
console.log(addTotalsToGrid(myGrid));
