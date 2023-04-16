// Given a 2-dimensional array which represents maze containing empty string or 'X' where the empty string represents there is a path and 'X' represents the path is blocked.

// Your task is to find the shortest path from (0, 0) to bottom right corner of the given matrix. From a given cell (i, j) you can only move to (i + 1, j) by moving down or (i, j + 1) by moving right or (i + 1, j + 1) by moving diagonally.

// Write a function mazeSolver which takes in a matrix and returns the shortest path.

function mazeSolver(matrix, row = 0, col=0){
    let visited= new Array(matrix.length).fill(false).map(el => new Array(matrix[0].length).fill(false));
    let queue = [];
    queue.push([0,0, [[0,0]]])
    visited[0][0] = true;
    
    let offsets = [[-1,0], [0,1], [1,0], [0,-1]];
    
    while (queue.length !== 0){
       let [currRow, currCol, currPath] = queue.shift();
       if(currRow === matrix.length-1 && currCol === matrix[0].length-1){
           return currPath;
       }
       for(let [offX, offY] of offsets){
           let[nextX, nextY] = [currRow+offX, currCol + offY];
           if(nextX >= 0 && nextX < matrix.length && nextY >= 0 && nextY < matrix[0].length && !visited[nextX][nextY] && matrix[nextX][nextY] !== "X"){
               let newPath = currPath.slice();
               newPath.push([nextX], nextY);
               queue.push([nextX, nextY, newPath]);
           }
           
       }
    }
return -1;
}



// Example
let input1 = [["", "","", ""], ["X","X", "X", ""],["", "","", ""],["X", "","", ""]];
console.log(mazeSolver(input1)); // should print [[0,0], [0, 1], [0, 2], [1,3], [2,3], [3,3]]