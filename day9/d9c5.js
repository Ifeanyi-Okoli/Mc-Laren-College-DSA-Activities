//Exercise : X win in last column
// XWinInLastColumn.md
// Given the following board variable representing a tic-tac-toe board. Write a function to 
//check if X has won in the last column. That is, whether all 3 cells in the last column 
//are 'X' Your function should return the correct boolean value for any given board.

// CODE TEMPLATE

function hasXWonInLastCol(board) {
if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X'){
    return true;
}else{
    return false;
}
}

console.log(hasXWonInLastCol([[' ', 'O', 'X'],['O', 'X', ' '], ['O', ' ', 'X']]));
console.log(hasXWonInLastCol([['O', 'X', 'X'],['O', 'X', ' '], ['O', 'X', 'X']]));
console.log(hasXWonInLastCol([['X', 'O', 'O'],['O', 'X', 'X'], ['O', ' ', 'X']]));
console.log(hasXWonInLastCol([[' ', 'O', 'X'],['O', 'X', 'X'], ['O', ' ', 'X']]));