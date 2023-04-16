//Find Word
// Write a function findWord which takes a matrix of characters and a target word,
// and returns true if the word appears vertically at some position in the matrix

// Note:

// Every element in the matrix will be a string of length 1
// You should only consider the top-down direction (ie. not left-right or down-up, etc)
// Example 1
// let easyPuzzle = [
//     ['b', 'a', 't'],
//     ['i', 'i', 'p'],
//     ['t', 'o', 'n']
// ];
// console.log(findWord(easyPuzzle, 'bit')); // should print true
// console.log(findWord(easyPuzzle, 'bat')); // should print false
// Example 2
// let hardPuzzle = [
//     ['y', 'o', 't', 'v'],
//     ['k', 'c', 'p', 's'],
//     ['t', 'h', 'n', 's'],
//     ['t', 'a', 'o', 'e'],
//     ['t', 't', 'a', 'i'],
// ];
// console.log(findWord(hardPuzzle, 'chat')); // should print true
// console.log(findWord(hardPuzzle, 'set')); // should print false
// console.log(findWord(hardPuzzle, 'i')); // should print true
// CODE TEMPLATE

function findWord(puzzle, word) {
    let count = 0;
    while (count < puzzle.length) {
        let result = "";
        for (let i = 0; i < puzzle.length; i++) {
            let sub = puzzle[i];
            let j = count;
            while (j === count) {
                result = result + sub[j];
                j++;
            }
        }
        if (result === word || result.slice(1) === word || result.slice(2) === word || result.slice(result.length - 1) === word) {
            return true;
        }
        count++;
    }
    return false;
}
let easyPuzzle = [
    ['b', 'a', 't'],
    ['i', 'i', 'p'],
    ['t', 'o', 'n']
];
console.log(findWord(easyPuzzle, 'bit')); // should print true
console.log(findWord(easyPuzzle, 'bat')); // should print false
let hardPuzzle = [
    ['y', 'o', 't', 'v'],
    ['k', 'c', 'p', 's'],
    ['t', 'h', 'n', 's'],
    ['t', 'a', 'o', 'e'],
    ['t', 't', 'a', 'i'],
];
console.log(findWord(hardPuzzle, 'chat')); // should print true
console.log(findWord(hardPuzzle, 'set')); // should print false
console.log(findWord(hardPuzzle, 'i')); // should print true