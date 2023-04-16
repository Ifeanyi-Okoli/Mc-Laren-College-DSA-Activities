// Chess Knight Shortest Path
// Find the number of moves a knight needs to make in order to reach destination

// Chess Knight Moves

// Examples

function knightMinPath([startX, startY], [endX, endY]) {
    let visited = new Array(8).fill(false).map(el => new Array(8).fill(false));
    let offsets = [[-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2]];
    let isValid = (row, col) => row >= 0 && row < 8 && col >= 0 && col < 8 && !visited[row][col];
    let queue = [[startX, startY, 0]];
    visited[startX][startY] =  true;
    while (queue.length !== 0){
        let [currX, currY, currSteps] = queue.shift();
        if(currX === endX && currY === endY){
            return currSteps;
        }
        for(let [offX, offY] of offsets){
            if(isValid(currX + offX, currY + offY)){
                visited[currX + offX][currY + offY] = true;
                queue.push([currX + offX, currY + offY, currSteps + 1]);
            }
        }
    }
    return -1;
}


console.log(knightMinPath([0, 7], [7, 0])); // should print 6
console.log(knightMinPath([3, 3], [1, 4])); // should print 1
console.log(knightMinPath([3, 3], [0, 6])); // should print 2
