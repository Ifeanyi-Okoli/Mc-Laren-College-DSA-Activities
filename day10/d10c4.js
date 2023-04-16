//Exercise : Number Table
// numberTable.md
// Write a program to display the multiplication table of a given integer 
//till the given number of terms.

// Example: for input 3 and number of terms 10 It should give

// 3
// 6
// 9
// 12
// 15
// 18
// 21
// 24
// 27
// 30
// CODE TEMPLATE

function numberTable(num, terms) {
   let count = 1
   while (count <= terms){
       console.log(num * count);
       count++;
   }
}
numberTable(3, 10);