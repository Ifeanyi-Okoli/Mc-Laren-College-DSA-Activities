//Calculator
// calculator.js
/*
You are required to create a simple calculator that returns the result of addition, subtraction, 
//multiplication or division of two numbers.
Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.
if the sign does not belong to the list above a message "unknown operator" must be returned.
*/
// Example:
//calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown operator"
// calculator(1,2,"*"); //=> result will be 2
// calculator(4,2,"/"); //=> result will be 2

function calculator(num1, num2, sign){
    if (sign === "+"){
        return num1 + num2;
    } else if (sign === "*"){
        return num1 * num2;
    }else if (sign === "/"){
        return num1 / num2;
    }else{
        return "unknown operator";
    }
}
console.log(calculator(1,2,"+"))
console.log(calculator(1,2,"&"))
console.log(calculator(1,2,"*"))
console.log(calculator(4,2,"/"))