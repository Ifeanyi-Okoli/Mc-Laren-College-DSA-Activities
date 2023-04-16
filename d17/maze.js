
function shortestPath(maze = [[]], row = 0, col = 0) {
    let stack = [];
    let count = 0;
    //base case
    if (col >= maze[0].length || row >= maze.length || maze[row][col] === "X") {
        return Number.POSITIVE_INFINITY;
    } else if (row === maze.length - 1 && col === maze[0].length - 1) {
        return 1;
    }    

    //recurse
 
        let rightPath = shortestPath(maze, row, col + 1);
        let downPath = shortestPath(maze, row + 1, col);
        let diagPath = shortestPath(maze, row + 1, col + 1);
        let minPath = Math.min(rightPath, downPath, diagPath);
        if(minPath === rightPath) maze[row][col] = ">";
        else if(minPath === downPath) maze[row][col] = ">";
        else maze[row][col] = ">";
       let result = minPath +1;
    //    console.log(maze)
        return result;
    
}

let maze = [["", "","", ""], ["X","X", "X", ""],["", "","", ""],["X", "","", ""]];
let maze2 = [["", "",""],["", "X",""],["", "",""]];
let maze3 = [["", "","", ""], ["X","X", "X", ""],["", "","", ""],["X", "","", ""]];
let maze4 = [["", "",""],["", "X",""],["", "",""]];
console.log(shortestPath(maze));
// console.log(maze)
// console.log(result)
// console.log(shortestPath(maze2));
// console.log(shortestPath(maze3));
// console.log(shortestPath(maze4));

/*

matrix2 = [["", "","", ""], ["X","X", "X", ""],["", "","", ""],["X", "","", ""]];
let mt = [["", "",""],["", "X",""],["", "",""]];
let matrix2 = [["", "","", ""], ["X","X", "X", ""],["", "","", ""],["X", "","", ""]];
let mt = [["", "",""],["", "X",""],["", "",""]];



*/