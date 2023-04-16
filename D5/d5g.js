// Given an array of numbers, write a function that returns a new array containing 
//all the numbers from the given array which are either in the first half or 
//greater than 10.

// First half contains elements from index 0 to ((arr.length - 1) / 2)

let numbers = [1, 20, 9, 6, 7, 11];

function firstHalfOrGreaterthan10(numbers) {
    let isValid = function (number, index, array) {
        console.log(`${index} - ${number}`)
        return number >10 || index < (array.length - 1)/2;
    }
    return numbers.filter(isValid);

}

console.log(firstHalfOrGreaterthan10(numbers)); // expected output should be [1, 20, 9, 11]