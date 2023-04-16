//create a function that creates a copy of the given array and change the last element to X
//
function changeLastElementToX(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    result[(result.length - 1)] = 'X';
    return result;
}
let orig = [2, 5, 6, 4, 8];
let copy = changeLastElementToX(orig);
console.log(copy);
console.log(orig);