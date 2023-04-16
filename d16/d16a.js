// let matrix = [[1,0,0,1], [0,0,0,0], [0,0,0,0], [0,0,0,0]]

function isSafe(matrix = [[]], row = 0, col = 0){
     for (let tempRow of matrix){
         if(tempRow[col] === 1){
             return false;
         }
     }

if(matrix[row].includes(1)){
            return false;
    }
    
   for (let diagonalRow = row+1, diagonalCol = col - 1; diagonalRow < matrix.length && diagonalCol >= 0; diagonalRow++, diagonalCol--){
       if (matrix[diagonalRow][diagonalCol]===1){
           return false;
       }
   }

   for (let diagonalRow = row -1, diagonalCol = col + 1; diagonalRow >= 0 && diagonalCol < matrix[0].length; diagonalRow--, diagonalCol++){
    if (matrix[diagonalRow][diagonalCol]===1){
        return false;
    }
}

for (let diagonalRow = row-1, diagonalCol = col - 1; diagonalRow >= 0 && diagonalCol >= 0; diagonalRow--, diagonalCol--){
    if (matrix[diagonalRow][diagonalCol]===1){
        return false;
    }
}
   for (let diagonalRow = row+1, diagonalCol = col + 1; diagonalRow < matrix.length && diagonalCol < matrix.length; diagonalRow++, diagonalCol++){
    if (matrix[diagonalRow][diagonalCol]===1){
        return false;
    }
}
   for (let diagonalRow = row+1, diagonalCol = col - 1; diagonalRow >= 0 && diagonalCol >= 0; diagonalRow--, diagonalCol--){
    if (matrix[diagonalRow][diagonalCol]===1){
        return false;
    }
}
        return true;
    }


console.log([[1, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 1, 0); // false
console.log([[1, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 1, 1); // false
console.log([[1, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 2, 3); // false
console.log([[1, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 3, 2); // false
console.log([[1, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 3, 3); // true
console.log(isSafe([[1, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 1, 0)); // false
console.log(isSafe([[1, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 1, 1)); // false
console.log(isSafe([[1, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 2, 3)); // false
console.log(isSafe([[1, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 3, 2)); // false
console.log(isSafe([[1, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 3, 3)); // true


function nQueenHelper(matrix = [[]], n = 0, row = 0){
    //base case
if(n===0){
    // console.log(matrix);
    return true;
}
    // recursive case
    for (let col = 0; col < matrix.length; col++){
        if(isSafe(matrix, row, col)){
            //pick the choice
            matrix[row][col] = 1;
            //explore possibilities
            let result = nQueenHelper(matrix, n-1, row+1);
            if(result === true){
                return true;
            }
            //unpick the choice
            matrix[row][col] = 0;
        }
    }
    return false;
}

function nQueen(n) {
    // let matrix = new Array(n).fill(0).map(el => new Array(n).fill(0));
    let matrix = [];
    for(let i = 0; i < n; i++){
        let tempRow = [];
        for (let j = 0; j < n; j++){
            tempRow.push(0);
        }
        matrix.push(tempRow);
    }
    
    nQueenHelper(matrix, n, 0);

    return matrix;
}
console.log(nQueen(4));
console.log(nQueen(5));