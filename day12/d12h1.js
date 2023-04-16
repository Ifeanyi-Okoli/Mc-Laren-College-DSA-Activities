//printTreePart1.md
// Write a function that takes a number as an input and print the following tree pattern on 
//the console.

// CODE TEMPLATE

function printChristmasTreePart1(numRows) {
    let a = " ";
    let b = "*";
    
    for (let i = numRows-1; i >= 1; i--) {
        let result = "";
        for (let j = i; j >= 1; j--) {
            result += a;
            } 
            console.log(result + b);
        }
        console.log(b);
    }
    
printChristmasTreePart1(4);
// should produce the following output

//    *
//   *
//  *
// *
// Note this pattern

// let a = " ";
// let b = "*";
// let result;
// let j = 4;
// if (j === 4) {
//     result += a;
//     console.log(result);
//     j--;
// }
// if (j === 3) {
//     result += a;
//     console.log(result);
// }
// if (j === 2) {
//     result += a;
//     console.log(result);
// }