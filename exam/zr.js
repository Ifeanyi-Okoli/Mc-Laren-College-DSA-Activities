
function rowAndColumnAreIdentical(arr, row, col){       
    for (let i = 0; i < arr[row].length; i++){
        if (arr[row][i] !== arr[i][col]){
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