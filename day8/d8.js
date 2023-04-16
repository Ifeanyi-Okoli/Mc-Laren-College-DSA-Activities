//findMinimumOfTwoNumbers.md
//Given two numbers create a function that returns the minimum of the two given numbers.
function getMinimum(num1, num2) {
    //     if (num1 < num2){
    //         return num1;
    //     }
    //     else{
    // return num2;
    //     }
    let result = num1 < num2 ? num1 : num2;
    return result;
}

console.log(getMinimum(5, 10)); // prints 5
console.log(getMinimum(-5, -9));// prints -9