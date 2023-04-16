//Exercise 2 - Implement array methods
// Note: You are not allowed to use any inbuilt array methods and will have to implement each of the 
//below function from scratch.

// 2.1 : Map method
// Implement the function map that accepts an array of objects and return a list of student names.

let students = [{ name: 'Raj', score: 100 }, { name: 'John', score: 90 }, { name: 'Michael', score: 88 }]
function map(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].name);
    }
    return result;
}
console.log(map(students)) // Expected output ['Raj', 'John', 'Michael']

// 2.2: Filter method
// Implement the function filter that accepts a list of numbers and return a new list containing all 
//the prime numbers from the given list.

function filter(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i] - 1; j > 1; j--) {
            if (arr[i] % j === 0) {
                arr.splice(i, 1);
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i] - 1; j > 1; j--) {
            if (arr[i] % j === 0) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}
let numbers = [20, 12, 7, 13, 53];

console.log(filter(numbers)); // Expected output [7, 13, 53]
console.log(filter([20, 4, 8, 12, 16])); // Expected output [7, 13, 53]


// 2.3: Every method
// Implement the function every which accepts an array and checks if every value in array is even or
//not.

function every(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i]%2!==0){
            return false;
        }
    }
    return true;
}
let numbers1 = [12, 100, 8, 4, 1];
console.log(every(numbers1)); // false