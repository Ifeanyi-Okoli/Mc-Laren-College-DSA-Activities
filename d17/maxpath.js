// Use the memoization to optimize the below code and draw the recursive tree diagram of the optimized 
// code. 
// Given an n * m matrix, the task is to find the maximum sum of elements of cells starting from the cell (0, 0) to cell (n-1, m-1). However, the allowed moves are right, downwards i.e, from location (i, j) next move can be (i+1, j), or, (i, j+1). Find the maximum sum of elements satisfying the allowed moves.
let cache = {};
function maxPathSum(matrix, row = 0, col = 0) {
    if(col >= matrix[0].length || row >= matrix.length) {
        return Number.NEGATIVE_INFINITY;
    } else if(row === matrix.length - 1 && col === matrix[0].length - 1) {
        return matrix[row][col];
    }
    else if(cache[`r-${row}c-${col}`] !== undefined) return cache[`r-${row}c-${col}`];
    else {
        let rightPathSum = maxPathSum(matrix, row, col + 1, cache);
        let downPathSum = maxPathSum(matrix, row + 1, col, cache);
        let maxSum = Math.max(rightPathSum, downPathSum);
        cache[`r-${row}c-${col}`] = matrix[row][col] + maxSum;
        return cache[`r-${row}c-${col}`];
    }    
}



let matrix = [[500, 100, 230],
[1000, 300, 100],
[200, 1000, 200]]
// Output: 3000

console.log(maxPathSum(matrix));