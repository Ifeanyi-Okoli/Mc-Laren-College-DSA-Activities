//Exercise : Flip Grid with Undefined
// flipGridWithUndefined.md
// Given a grid of booleans write a function that flips each boolean value to its opposite boolean 
//value. Undefined elements/arrays should be ignored.

// CODE TEMPLATE

function flipGrid(grid) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i] !== undefined){
                for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== undefined) {
                grid[i][j] = !grid[i][j];
            }
        }
    }
    grid[i] = grid[i];
}
    return grid;
}
let grid = [[true, false, undefined, true],
[undefined, false, true, true],
    undefined,
[undefined, undefined, false, false]];
console.log(flipGrid(grid));
/*
should print
[[false,true,undefined,false],
 [undefined,true,false,false],
 undefined,
 [undefined,undefined,true,true]]);
*/

// function flipGrid(grid) {
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             grid[i][j] = !grid[i][j];
//         }
//     }
//     return grid;
// }
// let grid = [[true, false, false, true],
// [false, false, true, true],
// [true, true, true, true],
// [false, false, false, false]];
// console.log(flipGrid(grid));