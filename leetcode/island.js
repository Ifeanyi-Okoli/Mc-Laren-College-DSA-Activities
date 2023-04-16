function getAdjNeighbors (i, j, grid, visited){
    let adjNeighbors = [];

    if(i > 0 && !visited[i-1][j]) adjNeighbors.push([i-1, j]);
    if(i < grid.length - 1 && !visited[i+1][j]) adjNeighbors.push([i+i, j])

    if(j > 0 && !visited[j-1][i]) adjNeighbors.push([j-1, i]);
    if(j < grid.length - 1 && !visited[j+1][i]) adjNeighbors.push([i+j, i])
    return adjNeighbors;
}


function dFS (i, j, grid, visited){
    let stack = [[i, j]];
    let islandSize = 0;

    while(stack.length){
        let curNode = stack.pop();
        let [i, j] = curNode;

        if(visited[i][j]) continue;
        visited[i][j] = true;

        if(grid[i][j] ==="0") continue;
        islandSize++;

        let adjNeighbors = getAdjNeighbors(i, j, grid, visited);

        stack.push(...adjNeighbors)
    }
    return islandSize > 0 ? true : false;
};


function numIslands (grid){
    let visited = grid.map(row => row.map(cell => false));
    let islandCount = 0;

    for(let i = 0; i <grid.length; i++){
        for(let j = 0; j <grid[i].length; j++){
            if(dFS(i, j, grid, visited)) islandCount++;
        }
    }
    return islandCount;
}

let grid= [[0, 1], 
        [1, 0]]
// Output: 2

let grid2= [[0, 1, 0], 
        [1, 0, 1],
        [0, 1, 0]]
// Output: 4

let grid3= [[0, 1, 0], 
        [1, 1, 1],
        [0, 1, 0]]
// Output: 1

let grid4= [[0, 1, 0], 
        [0, 0, 0],
        [0, 1, 0]]

console.log(numIslands(grid));
console.log(numIslands(grid2));
console.log(numIslands(grid3));
console.log(numIslands(grid4));