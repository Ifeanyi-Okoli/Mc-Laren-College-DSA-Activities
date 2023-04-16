//Print Reversed Pattern
// printReversedPattern.md
// Given the number of rows, use a while loop to print the following pattern.

// For rows = 2, the pattern should print like this:

// **
// *
// For rows = 4, the pattern should print like this:
// ****
// ***
// **
// *
// rows will always be a positive integer.

// CODE TEMPLATE

function printPattern(rows) {
    let result;
    while (rows >= 1) {
        let i = "*";
        let j = 1;
        let k = "";
        while (j <= rows) {
            k += i;
            j++;
        }
        console.log(k);
        rows--;
    }
}
printPattern(2);
printPattern(4);
// TIP: Use a nested while loop. The inner while loop should be used to create a row of stars.
/*
LOOP TRACE
1. while 2 >= 1 true, rows = 2
 1.1 while 1 <= 2 true, rows = 2, j = 1, k = ""
 1.2 while 2 <= 2 true, rows = 2, j = 2, k = "*"
 1.3 while 3 <= 2 false, rows = 2, j = 3, k = "**"
 console.log(**)


*/