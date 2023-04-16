
function maxPathSum(arr = [[]], row = 0, col = 0) {
    if (row === arr.length - 1 && col === arr[0].length - 1) return arr[row][col];
   
    if (col >= arr[0].length || row >= arr.length) return Number.NEGATIVE_INFINITY;

    let goRightSum = maxPathSum(arr, row, col+1);
    let goDownSum = maxPathSum(arr, row+1, col);

    let maxSum = Math.max(goRightSum, goDownSum);
    return maxSum + arr[row][col];
}

let matrix = [[100, -350, -200],
[-100, -300, 700]]

// Output: 400
// Explanation: 
// Path followed is 100 -> -100 -> -300 -> 700

// Input:
let matrix1 = [[500, 100, 230],
[1000, 300, 100],
[200, 1000, 200]]
// Output: 3000
// Explanation:
// Path followed is 500 -> 1000 -> 300 -> 1000 -> 200

console.log(maxPathSum(matrix));
console.log(maxPathSum(matrix1));