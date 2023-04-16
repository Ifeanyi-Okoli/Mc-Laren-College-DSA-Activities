
function rowAndColumnAreIdentical(matrix, row, col){       
    for (let i = 0; i < matrix[row].length; i++){
        if (matrix[row][i] !== matrix[i][col]){
            return false;
        }

        }
    return true;
}




function hasIdentical(matrix) {
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            res = rowAndColumnAreIdentical(matrix, row, col);
        }
        

        }
    return res;
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

