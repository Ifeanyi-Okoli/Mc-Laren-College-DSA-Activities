// Create Array of 5 Random Numbers
// createArrayOf5RandomNumbers.md
// Using a while loop create an array of a given size equal to the value of the size 
//variable filling in random numbers between 0 and 10.

// HINT : Use Math.random()*10 to generate the random numbers between 0 and 10

// CODE TEMPLATE

let rand = [];
let size = 5;
let count = 1;
let i = 0;
while (count <= size){
rand[i] = Math.floor(Math.random()*10);
i++;
count++;
}
console.log(rand);

// console.log(Math.random()*10)