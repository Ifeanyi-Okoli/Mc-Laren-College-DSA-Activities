//Exercise : X win in board
// XWinInBoard.md
// Given the following board variable representing a tic-tac-toe board. Write a function 
//that takes a board as an input and return true if X has won and false if X has not won.

// Note: We can give you any state of the board and you will have to give correct result 
//if X has won for that particular state of the board.

// Hint: You have to check in all rows, columns and diagonals.

// CODE TEMPLATE

function hasXWon(board)
{
  if ((board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') || 
      (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') ||
      (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') ||
      (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') ||
      (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') ||
      (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') ||
      (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') ||
      (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X')){
    return true;
}else{
    return false;
}
}
let board = [[' ', 'O', 'X'],['O', 'X', ' '], ['O', ' ', 'X']];
console.log(hasXWon(board));
board = [['X', 'O', ' '],['O', 'X', 'O'], ['X', 'O', 'X']];
console.log(hasXWon(board));
