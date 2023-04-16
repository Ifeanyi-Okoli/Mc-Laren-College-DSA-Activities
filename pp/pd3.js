//Count Surrounding Coins
// countSurroundingCoins.md
// Count Surrounding Coins
// You are given a square board with coins ($) at certain positions.

// Your task is to fill the empty boxes(' ') with appropriate numbers.

// For every empty box you have to count the number of coins ($) present in the 
//immediate surrounding blocks.

// For example,

// [[' ',' ','$'],
//  [' ','$',' '],
//  ['$',' ','$']]
// should return

// [[ 1 , 2 ,'$'],
//  [ 2 ,'$', 3 ],
//  ['$', 3 ,'$']]
// CODE TEMPLATE

function countNeighbouringCoins(board){

 for (let i = 0; i < board.length; i++){
     let sub = board[i];
    for (let j = 0; j < sub.length; j++){
        let count = 0;
        if (sub[j] === " "){
            //j+1<sub.length && j-1 >= 0 && i-1 >= 0 && i+1<board.length &&
            if (j+1<sub.length){
                if(sub[j+1] === "$"){
                    count++;
                }
            }
            if (j-1 >= 0){
                if(sub[j-1] === "$"){
                    count++;
                }
            }
            if(i+1<board.length){
                if(board[i+1][j] === "$"){
                    count++;
                }
            }
            if (i-1 >= 0){
                if(board[i-1][j] === "$"){
                    count++;
                }
            }
            if (i+1<board.length && j+1<sub.length){
                if(board[i+1][j+1] === "$"){
                    count++;
                }
            }
            if (i+1<board.length && j-1 >= 0){
                if(board[i+1][j-1] === "$"){
                    count++;
                }
            }
            if (i-1 >= 0 && j+1<sub.length){
                if(board[i-1][j+1] === "$"){
                    count++;
                }
            }
            if (i-1 >= 0 && j-1 >= 0){
                if(board[i-1][j-1] === "$"){
                    count++;
                }
            }
            
            sub[j] = count;
        }
     }
 }
 return board;
}
console.log(countNeighbouringCoins([[' ',' ','$'],
                                    [' ','$',' '],
                                    ['$',' ','$']]));
//should return 
//[[ 1 , 2 ,'$'],
// [ 2 ,'$', 3 ],
// ['$', 3 ,'$']]

console.log(countNeighbouringCoins([[' ',' '],
                                    [' ','$']]));
//should return 
//[[ 1 , 1 ],
// [ 1 ,'$']]

console.log(countNeighbouringCoins([[' ',' ','$',' '],
                                    [' ','$',' ',' '],
                                    ['$',' ','$',' '],
                                    [' ',' ','$',' ']]));
//should return 
//[[ 1 , 2 ,'$', 1 ],
// [ 2 ,'$', 3 , 2 ],
// ['$', 4 ,'$', 2 ],
// [ 1 , 3 ,'$', 2 ]]