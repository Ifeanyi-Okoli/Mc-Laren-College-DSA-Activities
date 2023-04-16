//Print First Three Negatives
// printFirstThreeNegatives.md
// Given an array of numbers, write a for loop that ignores all the positive values and prints 
//the first three occurances of negative values. It should ignore all the further occurances of 
//any negative values in the array.

// HINT: Use the 'break' statement.

// CODE TEMPLATE

let numbers = [1, -5, 8, 8, -6, 4 ,2, -7 ,5, -8, -1, 5]; // should print -5 -6 -7
let count = 0;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0){
        console.log(numbers[i]);
        count++;
        if(count === 3){
            break;
        }
    }
}
