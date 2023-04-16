

function numOfIslands(matrix){
    let countIslands = 0;
    for(let rowIndex in matrix){
        for(let colIndex in matrix[rowIndex]){
            if(matrix[rowIndex][colIndex] === "1"){
                countIslands++;
                teraform(rowIndex, colIndex, matrix);
            }
        }
    }
    return countIslands;
}

const teraform = (row, col, matrix) => {
    if(matrix[row]===undefined || matrix[row][col]===undefined || matrix[row][col] === "0") return;
    matrix[row][col] = "0";
    teraform(row+1, col, matrix);
    teraform(row-1, col, matrix);
    teraform(row, col+1, matrix);
    teraform(row, col-1, matrix);
}


let matrix= [[0, 1], 
        [1, 0]]
// Output: 2

let matrix2 =  [[0, 1, 0], 
        [1, 0, 1],
        [0, 1, 0]]
// Output: 4

let matrix3 = [[0, 1, 0], 
        [1, 1, 1],
        [0, 1, 0]]
// Output: 1

let matrix4 = [[0, 1, 0], 
        [0, 0, 0],
        [0, 1, 0]]
// Output: 2

console.log(numOfIslands(matrix));2
console.log(numOfIslands(matrix2));4
console.log(numOfIslands(matrix3));1
console.log(numOfIslands(matrix4));2