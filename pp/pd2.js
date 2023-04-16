//Possible Knight Moves
// possibleKnightMoves.md
// Time Allowed : 45 minutes

// Given a square chessboard and a knight occupying a cell return the number of 
//the possible positions it can take after making a move.

// The letter 'K' denotes the current knight position.

// For eg.

chessBoard = [[' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' '],
[' ', 'K', ' ', ' '],
[' ', ' ', ' ', ' ']];
chessBoard2 = [[' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' '],
[' ', 'K', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ']];
chessBoard3 = [['K', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ']];
function possibleKnightMoves(chessBoard) {
    let len = chessBoard.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        let len1 = chessBoard[i].length;
        let sub = chessBoard[i];
        for (let j = 0; j < len1; j++) {
            if (sub[j] === "K") {
                if (i - 1 >= 0 && (j + 2) < len1) {
                    if (chessBoard[i - 1][j + 2] !== undefined) {
                        count++;
                    }
                }
                if (i - 1 >= 0 && j - 2 >= 0) {
                    if (chessBoard[i - 1][j - 2] !== undefined) {
                        count++;
                    }
                }
                if (i + 1 < len && j + 2 < len1) {
                    if (chessBoard[i + 1][j + 2] !== undefined) {
                        count++;
                    }
                }
                if (i + 1 < len && j - 2 >= 0) {
                    if (chessBoard[i + 1][j - 2] !== undefined) {
                        count++;
                    }
                }
                if (i - 2 >= 0 && j + 1 < len1) {
                    if (chessBoard[i - 2][j + 1] !== undefined) {
                        count++;
                    }
                }
                if (i - 2 >= 0 && j - 1 >= 0) {
                    if (chessBoard[i - 2][j - 1] !== undefined) {
                        count++;
                    }
                }
                if (i + 2 < len && j + 1 < len1) {
                    if (chessBoard[i + 2][j + 1] !== undefined) {
                        count++;
                    }
                }
                if (i + 2 < len && j - 1 >= 0) {
                    if (chessBoard[i + 2][j - 1] !== undefined) {
                        count++;
                    }
                }

            }
        }
    }
    return count;
}
console.log(possibleKnightMoves(chessBoard));//returns 4 becuase possible moves are[[0,0],[0,2],[1,3],[3,3]];
console.log(possibleKnightMoves(chessBoard2));// returns 6 because possible moves are[[0,0],[0,2],[1,3],[3,3],[4,0],[4,2]];
console.log(possibleKnightMoves(chessBoard3));// returns 2 because possible moves are [[2,1],[1,2]]