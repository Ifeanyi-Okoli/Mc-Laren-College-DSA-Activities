//Exercise : Splice
// splice.md
// Part1
// Use the splice method in Javascript to remove a portion of the array starting from the 
//element 'd' till the end of the array Print the original array and the removed part of the 
//array by storing it first in a variable when performing the splice operation.

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];
let indexOfd = alphabets.indexOf('d');
let removed = alphabets.splice(indexOfd);// perform the splice operation here
console.log(alphabets);
console.log(removed);

// Part2
// Use the splice method in Javascript to remove a portion of the array starting from the 
//element 'c' till the element 'e' and store the removed part in a variable. Now print the 
//orginal and the removed part.

// let alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];
// let str = "abcdef";
// let indexOfc = alphabets.indexOf('c');
// let indexOfe = alphabets.indexOf('e');
// let removed = alphabets.splice(indexOfc, 3);
// console.log(alphabets);
// console.log(removed);



// Part3
// Remove 1 element from index 2 and insert “trumpet”

let myFish = ['angel', 'clown', 'drum', 'sturgeon'];
myFish.splice(2, 1, "trumpet");
console.log(myFish);


// Part4
// Write a function that removes all the odd numbers in the given array and returns the array. 
//Note: You cannot create a new array

function removeAllOdd(arr){
for (let i = arr.length - 1; i >= 0; i--){
    if(arr[i] % 2 !== 0){
        arr.splice(i, 1);
    }
}
return arr;
}
console.log(removeAllOdd([1,5,8,4,6,2,8,1,9,7,11]));