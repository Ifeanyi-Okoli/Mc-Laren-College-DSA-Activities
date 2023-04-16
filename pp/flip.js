function flipGrid(grid) {
    // write your code here
    let arr = [];
    for (let i in grid) {
      for (let j in grid) {
        if (grid[i][j] !== undefined) {
          arr.push(grid[i][j]);
        }
      }
    }
    return arr;
  }
  let grid = [
    [true, false, undefined, true],
    [undefined, false, true, true],
    undefined,
    [undefined, undefined, false, false],
  ];
  console.log(flipGrid(grid));