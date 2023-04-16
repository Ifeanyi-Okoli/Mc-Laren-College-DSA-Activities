// Identical Row and Column
// Part 1
// Write a function called rowAndColumnAreIdentical which takes in a 2-D square matrix and a 
//row index and a column index and returns true if the row has the same values as the column.
//
// instructor's instruction
//For Part1 you need to iterate through each element of the given row and column to check if 
//they are equal one by one.


function rowAndColumnAreIdentical(arr, row, col) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[row][i] !== arr[i][col]) {
            return false;
        }
    }
    return true;
}

let matrix = [
    [1, 2, 3, 4],
    [2, 4, 9, 8],
    [5, 9, 7, 7],
    [6, 8, 1, 0]
];
console.log(rowAndColumnAreIdentical(matrix, 1, 1)); // should return true
console.log(rowAndColumnAreIdentical(matrix, 1, 2)); // should return false
console.log(rowAndColumnAreIdentical(matrix, 3, 3)); // should return false

console.log(rowAndColumnAreIdentical([[0, 1], [1, 1]], 1, 1)); // should return true