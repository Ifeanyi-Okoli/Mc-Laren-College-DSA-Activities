// Path Finder
// Allowed Time: 45 mins

// You are at position [startX, startY] in maze of size NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return the minimal number of steps to exit position [endX, endY] if it is possible to reach the exit from the starting position. Otherwise return false

// Empty positions are marked . Obstacles are marked @. Start and exit positions are empty in all test cases.

// Examples
// Input: 



function pathFinder(maze = [[]], row = 0, col = 0){
    let stack = [];
    let count = 0;
    //base case
    if (col >= maze[0].length || row >= maze.length || maze[row][col] === "X") {
        return Number.POSITIVE_INFINITY;
    } else if (row === maze.length - 1 && col === maze[0].length - 1) {
        return 1;
    }    

    //recurse
 
        let rightPath = pathFinder(maze, row, col + 1);
        let downPath = pathFinder(maze, row + 1, col);
        // let diagPath = pathFinder(maze, row + 1, col + 1);
        let minPath = Math.min(rightPath, downPath);
        if(minPath === rightPath) maze[row][col] = ">";
        else if(minPath === downPath) maze[row][col] = ">";
        else maze[row][col] = ">";
       let result = minPath +1;
    //    console.log(maze)
        return result;
    
}




let maze =
[
  [".","@","."],
  [".","@","."],
  [".","@","."]
]
// startX, startY: [0,0]
// endX, endY: [2, 2]
console.log(pathFinder(maze, 0,0));

// Output: false
// Input: 
let maze2 = [
  [".", ".", ".", ".", ".", ".",],
  [".", ".", ".", ".", ".", ".",],
  [".", ".", ".", ".", ".", ".",],
  [".", ".", ".", ".", ".", ".",],
  [".", ".", ".", ".", ".", ".",],
  [".", ".", ".", ".", ".", ".",]
]
// startX, startY: [0,0]
// endX, endY: [5, 5]

console.log(pathFinder(maze2, 0,0));

// Output: 10
// Input: 
let maze1= 
[
  [".", ".", ".", ".", ".", ".",],
  [".", ".", "@", ".", ".", ".",],
  [".", "@", ".", "@", ".", ".",],
  [".", ".", "@", ".", ".", ".",],
  [".", ".", ".", ".", ".", ".",],
  [".", ".", ".", ".", ".", ".",]
]
// startX, startY: [2,2]
// endX, endY: [4, 5]

// Output: false

console.log(pathFinder(maze1, 2,2));