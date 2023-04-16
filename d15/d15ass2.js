//Min Path Sum modified
// Given an n * m matrix, the task is to find the minimum sum of elements of cells 
//starting from the cell (0, 0) to cell (n-1, m-1).

// However, the allowed moves are right, downwards and diagonally right, i.e, from 
//location (i, j) next move can be (i+1, j), or, (i, j+1) or (i+1, j+1). Find the 
//minimum sum of elements satisfying the allowed moves.

// Input:

function minPathSum(arr = [[]], row = 0, col = 0){
    if (row === arr.length - 1 && col === arr[0].length - 1) return arr[row][col];
   
    if (col >= arr[0].length || row >= arr.length) return Number.POSITIVE_INFINITY;

    let goRightSum = minPathSum(arr, row, col+1);
    let goDownSum = minPathSum(arr, row+1, col);
    let goDiagonalSum = minPathSum(arr, row+1, col+1);

    let minSum = Math.min(goRightSum, goDownSum, goDiagonalSum);
    return minSum + arr[row][col];
}



let matrix = [
            [100, -350, -200],
            [-100, -300, 700]
          ]

// Output: 150
// Explanation: 
// Path followed is 100 -> -350 -> -300 -> 700
// Input:
let matrix1 = [
            [500, 100, 230],
            [1000, 300, 100],
            [200, 1000, 200]
          ]
// Output: 900
// Explanation:
// Path followed is 500 -> 100 -> 100 -> 200

let matrix3 = [[1, 2, 3]]
// expect(minPathSum(matrix3)).toStrictEqual(6);
let matrix4 = [[1], [2], [3]];
// expect(minPathSum(matrix4)).toStrictEqual(6);

let matrix5 = [[1, 100], [50, 2], [3, 0]];
// expect(minPathSum(matrix5)).toStrictEqual(3);


console.log(minPathSum(matrix));
console.log(minPathSum(matrix1));
console.log(minPathSum(matrix3));
console.log(minPathSum(matrix4));
console.log(minPathSum(matrix5));