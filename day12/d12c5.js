//Exercise Name : Print Pattern For Loop
// printPatternForLoop.md
// function printPattern(n) {
//     let str = '';
//     let i = 0;
//     while (i < n) {
//         str += '*';
//         console.log(str);
//         i++;
//     }
// }
// printPattern(4);
// The above code prints the following pattern . Your task is to convert the while loop to the for 
//loop.

// For rows = 2, the pattern should print like this:
// *
// **
// For rows = 4, the pattern should print like this:
// *
// **
// ***
// ****
// rows will always be a positive integer.

// CODE TEMPLATE

function printPattern(rows){
    let str = '';
for (let i = 0; i < rows; i++){
    str += '*';
    console.log(str);
}
}
printPattern(2);
printPattern(4);