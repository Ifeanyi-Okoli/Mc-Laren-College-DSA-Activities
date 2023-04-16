// Exercise 4 - Peeling off the Outer Layers
// Given an array of arrays, return a new array of arrays containing every element, 
//except for the 
//outer elements.

// Examples
// Exercise 4
function peelLayerOff(arr) {
    let result1 = [];
    for (let i = 0; i < arr.length; i++) {
        let result = [];
        for (let j = 0; j < arr[i].length; j++) {
            if (i > 0 && i < arr.length - 1 && j > 0 && j < arr[i].length - 1) {
                result.push(arr[i][j])
            }
        }
        result1.push(result);
    }
    result1.pop();
    result1.shift();
    return result1;
}
console.log(peelLayerOff([
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h"],
    ["i", "j", "k", "l"],
    ["m", "n", "o", "p"]
])); // [
//   ["f", "g"],
//   ["j", "k"]
// ]

console.log(peelLayerOff([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35]
])); //➞ [
//   [7, 8, 9],
//   [12, 13, 14],
//   [17, 18, 19],
//   [22, 23, 24],
//   [27, 28, 29]
// ]

console.log(peelLayerOff([
    [true, false, true],
    [false, false, true],
    [true, true, true]
])); // ➞ [[false]]

console.log(peelLayerOff([
    ["hello", "world"],
    ["hello", "world"]
]));// ➞ []
// Notes
// The 2D grid is always a rectangular/square shape.
// Always return some form of nested array, unless there are no elements. In that case, return an
//empty array.