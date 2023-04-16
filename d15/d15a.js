// Given an n * m matrix, the task is to find the maximum sum of elements of cells
// starting from the cell (0, 0) to cell (n-1, m-1).

// However, the allowed moves are right, downwards i.e, from location (i, j) 
//next move can be (i+1, j), or, (i, j+1). Find the maximum sum of elements 
//satisfying the allowed moves.

// Input:

function findMax(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        for (let j = 0;j < arr[i].length; j++){
            if(i === 0 && j ===0){
                sum+=arr[i][j];
                return sum;
            }
            if (i === arr.length-1 && j === arr[i].length-1){
                return sum += arr[arr.length-1][arr[i].length-1];
            }
            if(arr[i+1][j] !== undefined && arr[i+1][j] !== undefined){

            }
            findMax(arr[i+1][j]) + findMax(arr[i+2][j]) 
        }
    }
}

matrix = [[100, -350, -200],
          [-100, -300, 700]]

Output: 400
Explanation: 
Path followed is 100 -> -100 -> -300 -> 700

Input:
matrix = [[500, 100, 230],
           [1000, 300, 100],
           [200, 1000, 200]]
Output: 3000
Explanation:
Path followed is 500 -> 1000 -> 300 -> 1000 -> 200