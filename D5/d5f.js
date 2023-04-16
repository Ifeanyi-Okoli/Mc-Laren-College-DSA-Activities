// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements 
//with values higher or equal to a and lower or equal to b and return the result as 
//an array.

let arr = [5, 3, 8, 1];
// let isInRange = (num) => num >= start && num <= end;

function filterRange(numbers, start, end) {
    let isInRange = (num) => num >= start && num <= end;
    return numbers.filter(isInRange);

    }


let filtered = filterRange(arr, 1, 4);
console.log(filtered); // the expected output is [3, 1]