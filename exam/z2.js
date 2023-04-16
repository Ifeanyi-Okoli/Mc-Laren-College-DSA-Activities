//Write a function that returns true if there exists a row that is identical to a column in 
//a 2-D square matrix, otherwise false.

// NOTE: You should call the function you created in Part 1.
// To illustrate:

[
    [1, 2, 3, 4],
    [2, 4, 9, 8],
    [5, 9, 7, 7],
    [6, 8, 1, 0]
]

//For Part2 you just need to call the function you created in Part1 for every row 
//and every column using two nested loops."
function rowAndColumnAreIdentical(arr, row, col) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[row][i] !== arr[i][col]) {
            return false;
        }
    }
    return true;
}


function hasIdentical(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rowAndColumnAreIdentical(matrix, i, j)) {
                return true;
            }
        }
    }
    return false;
}
console.log(hasIdentical([
    [4, 4, 4, 4],
    [2, 4, 9, 8],
    [5, 4, 7, 7],
    [6, 4, 1, 0]
])); // true

console.log(hasIdentical([
    [4, 4, 9, 4],
    [2, 1, 9, 8],
    [5, 4, 7, 7],
    [6, 4, 1, 0]
]));//➞ false

console.log(hasIdentical([
    [4, 4],
    [2, 1]
]));// ➞ false

console.log(hasIdentical([
    [4, 2],
    [2, 1]
]));// true

