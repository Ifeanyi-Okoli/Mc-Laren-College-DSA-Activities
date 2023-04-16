//Exercise : Print Until Negative Using while Loop
// Print Until Negative Using while loop.md
// Given an array of numbers, loop through the array and print each number until you encounter 
//a negative number. At the end, print the sum of all numbers traversed.

// CODE TEMPLATE

function printUntilNegative(numbers){
let i = 0;
let sum = 0;
while (numbers[i] >= 0 && numbers[i] !== undefined){
    console.log(numbers[i]);
    sum += numbers[i];
    i++
}
console.log(sum);
}
printUntilNegative([1,2,0,6,8,-1,2,-4]);
// should print

// 1
// 2
// 0
// 6
// 8
// 17