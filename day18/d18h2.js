//Sum Skip Array
// sumSkipArray.md
// Give an multi-dimensional array, starting from the first row, traverse the 
//array by skipping every next row and calculate the sum of traversed elements.

function traverseArray(arr){
    let sum = 0;
   for (let i = 0; i < arr.length; i++){
    if (i % 2 === 0){
        for (let j = 0; j < arr[i].length; j++){
                   sum += arr[i][j];
        }
    }
}
return sum;
}
let arr1 = [[1,2,3],
           [4,5,6],
           [7,8,9]];
let arr2 = [[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]];
console.log(traverseArray(arr1));// 30
console.log(traverseArray(arr2));// 52