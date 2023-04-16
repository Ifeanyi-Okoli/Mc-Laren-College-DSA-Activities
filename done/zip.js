//Exercise : Zip It
// zipIt.md
// Zip It
// Write a function called zipIt that accepts two already sorted arrays and returns a new array 
//which contains all the elements present in both the arrays in a sorted order.

// Note: Do not use a sorting algorithm
// Eg.

// zipIt([1,5,9,10], [2,4,7])
// will return [1,2,4,5,7,9,10]

// CODE TEMPLATE

function zipIt(arr1,arr2){
let arr3 = arr1.concat(arr2);
arr3.sort();
for (let i = 0; i < arr3.length; i++){
    let temp = arr3[i];
    if (arr3[i] > arr3[i+1]){
        arr3[i] = arr3[i+1];
        arr3[i+1] = temp;
    }
}
//console.log(arr3);
return arr3
}
console.log(zipIt([1, 5, 9, 10], [2, 4, 7])); // should return `[1, 2, 4, 5, 7, 9,10]`

console.log(zipIt([1, 2, 3, 4], [4, 5, 6, 7])); // should return `[1, 2, 3, 4, 4, 5, 6, 7]`