// Given n number of dice, Write a function rollNDice which returns all possible combinations we can have when we roll n dice.

// Example:

// for N=2

let dice = [1, 2, 3, 4, 5, 6];
let n = 2;


function rollNDice(n){
    if(n===0) return [];
    if(n===1) return [[1], [2], [3], [4], [5], [6]];
    let allValues = [];
    for (let diceValue = 1; diceValue <=6; diceValue++){
        // let firstDiceValue = 1;
        let result = rollNDice(n-1);
        let newResult = result.map((values)=>{
            values.unshift(diceValue);
            return values;
        });
        allValues = allValues.concat(newResult);
    }
    return allValues;
}

console.log(rollNDice(2));
// function diceOutcome(n, arr){
//     let res = []
//     let res2 = []
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length; j++){
//             res. push(arr[i], arr[j])
//         }
//     }
// }

// It will return 
// [[1,1], [1,2], [1,3], [1,4], [1,5], [1,6]
// [2,1], [2,2], [2,3], [2, 4], [2, 5], [2, 6],
// [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6]
// [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6]
// [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6]
// [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6]]