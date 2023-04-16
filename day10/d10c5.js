//Exercise : Sum of Even Numbers
// calculateEvenSum.md
// Given variables fromNum and toNum, calculate the sum of all the even numbers 
//from fromNum to toNum using while loop. Value of fromNum will be 
//always be less than or equal to toNum.

// CODE TEMPLATE

let fromNum = 6;
let toNum = 12;
let sum = 0;
while (fromNum <= toNum){
    if (fromNum % 2 === 0){
        sum = sum + fromNum;
    } 
    fromNum++;
}
console.log(sum);