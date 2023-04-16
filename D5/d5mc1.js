// Challenge 1
// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// But if you roll DOUBLES, your score is instantly wiped to 0

// Create a function which takes in a matrix as input, and return John's score after 
//his game has ended.

// Examples
function diceGame(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i][0] === arr[i][1]){
            sum = sum *0;
        }
        else{
            sum = sum + arr[i][0] + arr[i][1];
        }
    }
    return sum;
}
console.log(diceGame([[1, 2], [3, 4], [5, 6]])); // should return 21
   
console.log(diceGame([[5, 6], [6, 4],[1, 1]])); // should return 0
   
console.log(diceGame([[4, 5], [4, 5], [4, 5]])); // should return 27