//Exercise 2 - TicTacToe
// Part 1: Create a function hasXWon which takes in a TicTacToe board and returns true if X has won 
//otherwise false

// Part 2: Create a function which takes in a TicTacToe board and prints the status of the board, 
//it prints either:

// Player X has won
// Player O has won
// Game is drawn
// Game in progress
// example board
let board = [['X', 'O', undefined], ['O', 'X', 'O'], [undefined, 'O', undefined]];


function hasXWon(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[0][0] === "X" && arr[1][1] === "X" && arr[2][2] === "X"){
            return true;
        }
        if(arr[i][0] === "X" && arr[i][1] === "X" && arr[i][2] === "X"){
            return true;
        }
        let j =0;
        while (j < arr[i].length){
            if(arr[0][j] === "X" && arr[1][j] === "X" && arr[2][j] === "X"){
                return true;
            }
            j++;
        }
    }
return false;
}

console.log(hasXWon(board));

console.log(ticTacToeGameStatus(board));
//part 2

function hasWon(arr, w){
    if(arr[0][0] === w && arr[1][1] === w && arr[2][2] === w){
        return true;
    }
    for (let i = 0; i < arr.length; i++){
        if(arr[i][0] === w && arr[i][1] === w && arr[i][2] === w){
            return true;
        }
        let j =0;
        while (j < arr[i].length){
            if(arr[0][j] === w && arr[1][j] === w && arr[2][j] === w){
                return true;
            }
            j++;
        }
    }
return false;
}

function draw(arr, p1, p2){
    let cp1 = 0;
    let cp2 = 0;
    for (let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] === p1){
            cp1++;
        }
        else{
            cp2++;
        }
    }
    }
    if (cp1 === cp2){
        return true;
    }
return false;
}

function ticTacToeGameStatus(arr){
 if(hasWon(arr, "X")){
     return "Player X has won";
 }
 if(hasWon(arr, "O")){
    return "Player O has won";
}
if(draw(arr, "O", "X") && !hasWon(arr, "O") && hasWon(arr, "X")){
    return "Game is drawn";
}
else{
    return "Game in progress";
}
}