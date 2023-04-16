//Exercise : Unique In Order
// unique_in_order.md
// Unique In Order
// Implement the function uniqueInOrder which takes as argument a string or array 
//and returns an array of items with the repeated elements removed.

// For example:

function uniqueInOrder(input){
    let result = [];
for (let i = 0; i< input.length; i++){
    if (i = 0){
        result.push(input[i])
    }
    for (let j = 0; j<result.length; j++ )
    if (input[i] !== result[j]){
        result.push(input[i])
    }
}
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'));//  ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));// ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));// [1,2,3]