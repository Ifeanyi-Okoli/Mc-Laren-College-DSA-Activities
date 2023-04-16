//Return Reversed Array
// returnReversedArray.md
// Write a new function that returns a new array containing the elements in reverse order. 
//Note: You cannot use 'push' method.

function returnReverse(list) {
    let result = [];
    for (let i = list.length - 1; i >= 0; i--) {
        result[result.length] = list[i];
    }
    return result;
}
let names = ["Raj", "Anil", "Anu", "Mahesh"];
console.log(returnReverse(names));