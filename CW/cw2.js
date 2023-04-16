// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example

function squareOrSquareRoot(array) {
    let result = [];
    for (let i = 0; i < array.length; i++){
        if(Math.sqrt(array[i]) %1 === 0){
            let a = Math.round(Math.sqrt(array[i]));
            result.push(a);
        }
        else{
            let b = Math.round(array[i] * array[i]);
            result.push(b);
        }
    }
    return result;
}


console.log((squareOrSquareRoot([4, 3, 9, 7, 2, 1])));//var expected = [ 2, 9, 3, 49, 4, 1 ];

console.log((squareOrSquareRoot([100, 101, 5, 5, 1, 1])));//expected = [ 10, 10201, 25, 25, 1, 1 ];


console.log((squareOrSquareRoot([1, 2, 3, 4, 5, 6])));//expected = [ 1, 4, 9, 2, 25, 36 ];

// Notes
// The input array will always contain only positive numbers, and will never be empty or null.