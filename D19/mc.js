// The Dice Game
// Allowed Time: 45 minutes

// Four friends are playing a simple dice game (players are denoted p1, p2, p3 and p4). In each round,
//all players roll a pair of six-sided dice. The player with the lowest total score is removed. 
//If the lowest score is shared by two or more players, the player in that group with the lowest 
//score from their first die is removed. If the lowest score is still shared (i.e. two or more 
//players have the same rolls in the same order), then all players roll again. This process 
//continues until one player remains. Given an array of scores only (given in player order for each 
//round), return the winning player.

// Example
function sum(arr) {
    // let sum = 0;
    let sum = arr[0] + arr[1];
    return sum;
}
function diceGame(arr) {
    let p = 4;
    let players = ["p1", "p2", "p3", "p4"];
    let index;
    while (p > 1) {
        for (let i = 0; i < p; i++) {
            let min = +Infinity;
            if (sum(arr[i]) < min) {
                min = sum(arr[i]);
                index = i;
            }
            if (sum(arr[i]) === min && sum(arr[i]) === sum(arr[i+1])) {
                if (arr[i][0] < arr[i+1][0]){
                     min = sum(arr[i]);
                index = i;
                }
                else if(arr[i][0] === arr[i+1][0]){
                    arr.splice(i,1);
                    // p--;
                }
            }
        }
        if (index === 0) players.splice(0,1);
        else if (index === 1) players.splice(1,1);
        else if (index === 2) players.splice(2,1);
        else players.splice(3,1);
        arr.splice(0, p);
        p--;
    }
    return players;
}

console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [3, 5], [1, 5], [4, 3], [1, 5], [1, 5], [5, 6], [2, 2]])) //➞ "p1"

//              p1      p2      p3      p4
// Round 1 -> [6, 2], [4, 3], [3, 4], [5, 4]  Player 3 removed.
// Round 2 -> [3, 5], [1, 5],         [4, 3]  Player 2 removed.
// Round 3 -> [1, 5],                 [1, 5]  No lowest score, players roll again.
// Round 4 -> [5, 6],                 [2, 2]  Player 1 wins!


console.log(diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [1, 5], [1, 5], [4, 3], [3, 6], [1, 2], [3, 6], [1, 5], [1, 5], [1, 6], [4, 5]])) //➞ "p4"

//              p1      p2      p3      p4
// Round 1 -> [6, 2], [4, 3], [3, 4], [5, 4]  Player 3 removed.
// Round 2 -> [1, 5], [1, 5],         [4, 3]  Lowest score tie, players roll again.
// Round 2 -> [3, 6], [1, 2],         [3, 6]  Player 2 removed.
// Round 3 -> [1, 5],                 [1, 5]  No lowest score, players roll again.
// Round 4 -> [1, 6],                 [4, 5]  Player 4 wins!