//Exercise Name : Average Of Three Numbers
// averageOfNumbers.md
// Here is an example of a function

function square(num){
   let squareOfNum = num * num;
   return squareOfNum;
}
let result = square(5);
console.log("The square is " + result);
//Write a function named averageOf3 that takes three numbers as parameters and returns 
//the average of the three numbers.

// Calculate the average of 30, 25, 35.

// Now calculate the average of -5, 10, -26

function averageOf3(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    return average;
}
console.log(averageOf3(30, 25, 35));
console.log(averageOf3(-5, 10, -26));