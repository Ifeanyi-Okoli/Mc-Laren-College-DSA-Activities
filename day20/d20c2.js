//Exercise : Boomrang
// boomerang.md
// Boomerang
// A boomerang is a V-shaped sequence that is either upright or upside down. 
//Specifically, a boomerang can be defined as a section of the array having 
//length 3, with the first and last digits being the same and the middle digit 
//being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]

// Create a function that returns the total number of boomerangs in an array. eg.

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// [1, 7, 1, 7, 1, 7, 1]
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
function findBoomrangs(arr){
let count = 0;
for (let i = 1; i < arr.length-1; i++){
    if (arr[i-1] === arr[i+1] && arr[i] !== arr[i-1]){
        count++
    }
}
return count;
}
console.log(findBoomrangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));//3
console.log(findBoomrangs([1, 7, 1, 7, 1, 7, 1]));//5
console.log(findBoomrangs([1, 1, 1, 1, 1, 1, 1]));//0
console.log(findBoomrangs([1]));//0
console.log(findBoomrangs([1, 2]));//0
console.log(findBoomrangs([1, 2, 3]));//0
console.log(findBoomrangs([1, 2, 1]));//1
console.log(findBoomrangs([]));//0