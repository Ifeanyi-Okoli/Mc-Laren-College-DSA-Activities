//Exercise : Number Split
// numberSplit.md
// Write a funcation called numberSplit which takes one number as a parameter. 
//The function should return a string containing the two halves of the given number. 
//If the number is odd, make the rightmost number higher. CODE TEMPLATE

function numberSplit(number) {
    if (number % 2 === 0) {
        let result = number / 2 + "";
        return result + (number / 2);
    } else {
        result = (number - 1) / 2 + "" + (number + 1) / 2
        return result;
    }
}
console.log(numberSplit(4));// should return "22"
console.log(numberSplit(10));// should return "55"
console.log(numberSplit(11));// should return "56"
console.log(numberSplit(-9));// should return "-5-4"