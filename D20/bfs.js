// Number of Islands
// You are given a matrix (array of arrays) consisting of only either 0 or 1 where 0 represents the sea and 1 represents the land. A piece of land (1) is only considered to be connected with another land in 4-directions (up, down, left and right).

// Write a function which takes a matrix and returns the total number of islands present.

// Examples
function island(arr=[[]]){
    let 
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === 1){

            }
        }
    }
}

Input: [[0, 1], 
        [1, 0]]
Output: 2

Input: [[0, 1, 0], 
        [1, 0, 1],
        [0, 1, 0]]
Output: 4

Input: [[0, 1, 0], 
        [1, 1, 1],
        [0, 1, 0]]
Output: 1

Input: [[0, 1, 0], 
        [0, 0, 0],
        [0, 1, 0]]
Output: 2
// Note
// Lands (1) are not considered to be connected to each other diagonally.