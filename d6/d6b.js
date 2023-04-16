// Write a function which takes in a list of numbers and returns the list containing cubes of those 
//numbers.

function getCubes(arr) {
    return arr*arr*arr;
    }
let cubeArr = [2, 5, 6, 3, 1].map(getCubes);
console.log(cubeArr);
getCubes([2, 5, 6, 3, 1]); // should return [ 8, 125, 216, 27, 1]