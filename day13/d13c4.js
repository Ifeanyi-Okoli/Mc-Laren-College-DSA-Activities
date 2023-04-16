//Exercise : flip Grid
// flipGrid.md
// Given a grid of booleans write a function that flips each value to its opposite boolean value 
//and returns the flipped grid.

// CODE TEMPLATE

function flipGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j] = !grid[i][j];
        }
    }
    return grid;
}
let grid = [[true, false, false, true],
[false, false, true, true],
[true, true, true, true],
[false, false, false, false]];
console.log(flipGrid(grid));
/*
should print
[[false,true,true,false],
 [true,true,false,false],
 [false,false,false,false],
 [true,true,true,true]]);
*/
