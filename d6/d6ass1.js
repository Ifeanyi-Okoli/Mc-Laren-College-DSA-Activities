//Exercise 1 - True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through 
//the number one digit at a time and appending true into the array if the digit is 1 and false 
//otherwise.

// Examples
function integerBoolean(str){
    let result = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] === "1"){
            result.push(true)
        }
        else{
            result.push(false);
        }
    }
    return result;
}

console.log(integerBoolean("100101")); //➞ [true, false, false, true, false, true]

console.log(integerBoolean("10")); //➞ [true, false]

console.log(integerBoolean("001")); //➞ [false, false, true]