//Exercise : 100 to 70
// 100to70.md
// Use a while loop to print out all the numbers from 100 to 70 in descending order skipping every 
//second number.

// OUTPUT

// 100
// 98
// 96
// .
// .
// .
// .
// 70
// Structure of a While Loop

let a = 100
while (a >= 70) {
  console.log(a);
  a = a - 2;
}