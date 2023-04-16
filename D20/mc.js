// The Connell Sequence
// Time Allowed: 55 mins

// The Connell sequence can be represented as a growing series of alternating numbered lines:

// If the line number is odd, the line contains a quantity of odd numbers equal to the line number, sorted ascendingly. If the line number is even, the line contains a quantity of even numbers equal to the line number, sorted ascendingly. Every number in a line is equal to its next term less 2, and the last number (and highest) number of the sequence has to be the square of the line number. Numbers have to be unique: there are no duplicates in the sequence, and not every number is in the sequence.

// Line 1 = 1
// // 1 odd number

// Line 2 = 2, 4
// // 2 even numbers

// Line 3 = 5, 7, 9
// // 3 odd numbers
// // Notice how the number 3 is missing.
// // Highest number in line is 9 (the square of line number)

// Line 4 = 10, 12, 14, 16
// // 4 even numbers
// and so on...
// Given a start and an end being the initial and ending line of the sequence, you have to implement a function that returns the index of the given n, in a generated array containing the portion of the Connell sequence. If n is not in the array, you have to return a string "Not Found".

// Examples

function connellSequence(start, end, num3){
    let seq = [];
    for (let i = start; i <=end; i++){
        while(i>=i*i){

            seq.push(i)
            i = i +2;
        }
    }
    let result = seq.indexOf(num3);
    if (result === -1) return "NOT FOUND";
    return result;
}

console.log(connellSequence(1, 3, 4)) // 2
// sequence = [1, 2, 4, 5, 7, 9]
// Number 4 is at index 2

console.log(connellSequence(2, 3, 4)) // 1
// sequence = [2, 4, 5, 7, 9]
// Number 4 is at index 1

console.log(connellSequence(4, 5, 22)) // "Not Found"
// sequence = [10, 12, 14, 16, 17, 19, 21, 23, 25]
// Number 22 is not in the sequence