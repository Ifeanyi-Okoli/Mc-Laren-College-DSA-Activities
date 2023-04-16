//Print Reverse Array
// printReverseArray.md
// Write a function that prints the given array in reverse order.

function printReverse(list) {
    for (let i = list.length - 1; i >= 0; i--) {
        console.log(list[i]);
    }
}
let nums = [4, 8, 9, 6, 3];
printReverse(nums);