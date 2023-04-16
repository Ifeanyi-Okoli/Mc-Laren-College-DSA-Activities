function numOfIslandBFSHelper(matrix, visited, row, col){
    let isValid = (nextRow, nextCol) => nextRow>=0 && nextRow < matrix.length && nextCol >= 0 && nextCol <matrix[0].length && !visited[nextRow][nextCol] && matrix[nextRow][nextCol]===1;

    let offsets = [[-1,0], [0,1], [1,0], [0,-1]]
    let queue =[[row,col]];
    while (queue.length !== 0){
       let [currRow, currCol] = queue.shift();
       for(let offset of offsets){
           let[xoffset, yoffset] = offset;
           let [nextRow, nextCol] = [currRow + xoffset, currCol + yoffset];
           if(isValid(nextRow, nextCol)){
               visited[nextRow] [nextCol] = true;
               queue.push([nextRow, nextCol])
           }
       }
    }

}

function numOfIslands(matrix){
    let visited = new Array(matrix.length).fill(false).map(el => new Array(matrix[0].lenght).fill(false));
    let isIslandCount = 0;
    for (let row = 0; row < matrix.length; row++){
        for(let col = 0; col <matrix[0].length; col++){
            if(matrix[row][col] === 1 && !visited[row][col]){
                isIslandCount++;
                numOfIslandBFSHelper(matrix, visited, row, col);
                console.log(visited);
            }
        }
    }
    return isIslandCount;
}