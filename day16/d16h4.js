//Exercise : Traverse Matrix
// traverseMatrix.md
// Part1
// Given a matrix, a starting position (row and column) and an instruction, move 
//left/right/up/down according to the instruction and return the value of the element at the 
//position reached after making the move.

// Note: You can assume that you will not overrun the boundaries.

// In the instruction,

// d: means move "down";

// r: means move "right";

// l : means move 'left',

// u : means move 'up'

// CODE TEMPLATE

function makeMove(arr, initialRowPosition, initialColPosition, instruction){
let i = initialRowPosition;
let j = initialColPosition;
// let d = arr[i+1][j];
// let u = arr[i-1][j];
// let r = arr[i][j+1];
let sum = 0;
// if (instruction === "d"){
//     i++;
//     loc = arr[i][j];
// } else if (instruction === "u"){
//     i--;
//     loc = arr[i][j];
// } else if (instruction === "l"){
//     j--;
//     loc = arr[i][j];
// } else if (instruction === "r"){
//     j++;
//     loc = arr[i][j];
// }
// return loc;

if (instruction === 'd' && j + 1 < arr.length) {
    j++;
    sum = arr[j][i];
}
else if (instruction === 'r' && i + 1 >= 0) {
    j++;
    sum = arr[i][j];
}
else if (instruction === 'u' && j - 1 < arr.length) {
    i--;
    sum = arr[i][j];
}
else if (instruction === 'l' && j - 1 >= 0) {
    j--;
    sum = arr[j][i];
}
return sum;

}
let arr = [
[1,-1,0],
[2,1,-2],
[3,2,-12]
];

console.log(makeMove(arr, 0, 0, 'd'));//2
console.log(makeMove(arr, 1, 2, 'u'));//0
console.log(makeMove(arr, 2, 1, 'r'));//-12
console.log(makeMove(arr, 0, 1, 'l'));//1
// Part2
// Given a matrix and an instruction string, traverse the array according to the instruction string and return the sum of the elements traversed. Traversing starts from the element with ithe element at the first row and first column : arr[0][0]

// Note: You can assume that you will not be given an instruction that makes you overrun the boundaries. For eg.

// function traverse(arr,instruction){
// // write your code here
// }
// let arr = [
// [1,-1,0],
// [2,1,-2],
// [3,2,-12]
// ];
// let instruction1 = 'drrldr'; 
// let instruction2 = 'ddudrl';
// let instruction3 = 'rrdldr';
// console.log(traverse(arr,instruction1));//-7
// console.log(traverse(arr,instruction2));//16
// console.log(traverse(arr,instruction3));// -11