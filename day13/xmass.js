// function printChristmasTree(numRows){
// for (let i = 0; i <= numRows; i++){

// }
// }
// printChristmasTree(4);
// should produce the following output

//    *
//   ***
//  *****
// *******
// Note this pattern

function printChristmasTree(numRows) {
    let a = " ";
    let b = "*";
    let count = 1
    for (let i = numRows - 1; i >= 0; i--) {
        let result = "";
        for (let j = i; j >= 1; j--) {
            result += a;
        }
        
        for (let k = count; k >= 1; k--) {
            result += b;
        }
        count += 2;
        console.log(result);
    }
}
printChristmasTree(4);