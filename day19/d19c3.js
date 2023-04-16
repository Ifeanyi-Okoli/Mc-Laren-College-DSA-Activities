//Exercise : Sum of Diagonals
// sum_of_diagonals.md
// Sum of Diagonals of a Square Matrix
// Write a function that accepts a two dimensional matrix and returns the sum of the 
//two diagonals.

// The matrix should be a square matrix (ie. equal number of rows and columns)
// You can use only one loop

function sumOfDiagonals(matrix){
let sum = 0;
let len = matrix.length;
for (let i = 0; i < matrix.length; i++){
    sum += matrix[i][i] + matrix[i][len - i - 1];
        }
        return matrix.length === 1 ? sum / 2: sum;
    }
console.log(sumOfDiagonals([[1,2,3],
                            [4,5,6],
                            [7,8,9]]));//30
console.log(sumOfDiagonals([[-1,-2],
                            [ 3, 4]]));//4
console.log(sumOfDiagonals([[1]]));//1,

//or

// function sumOfDiagonals(matrix){
//     let sum = 0;
//     let col = matrix.length - 1;
//     let row = matrix[0].length -1;
//     for (let i in matrix){
//         for (let j in matrix){
//             if (i === j || i == col - j){
//                 sum = sum + matrix[i][j];
//             }
//         }
//     }
//     if (row % 2 === 0){
//                 sum = matrix[row / 2][col / 2];
//             }
//      return sum;
//     }
//     console.log(sumOfDiagonals([[1,2,3],
//                                 [4,5,6],
//                                 [7,8,9]]));//30
//     console.log(sumOfDiagonals([[-1,-2],
//                                 [ 3, 4]]));//4
//     console.log(sumOfDiagonals([[1]]));//1,