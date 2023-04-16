//Print Christmas Tree
printChristmasTree.md
// Write a function that takes a number as an input and print the following Christmas Tree pattern 
//on the console.

// CODE TEMPLATE

// function printChristmasTree(numRows){
// // write your code here
// }
// printChristmasTree(4);
// should produce the following output

//    *
//   ***
//  *****
// *******
// Note this pattern


function printChristmasTree(numRows) {
    let star = "";
    for (let i = 0; i <= numRows; i++) {
        star = "";
        for (let j = i; j < 10; j++) {
            star += " "
        }
        for (let k = 0; k < (i * 2) - 1; k++) {
            star += "*";

        }
        console.log(star);
    }

}
printChristmasTree(4);
