//Traverse Array Alternate
// travaerseArrayAlternate.md
// Given an multi-dimensional array, traverse the array row-wise in alternate fashion.

function traverseAlternate(arr){
    let result = [];
    let res = "";
for (let i = 0; i < arr.length; i++){
    if (i % 2 === 0){
        for (let j = 0; j < arr[i].length; j++){
            result.push(arr[i][j]);
            res += arr[i][j] + " ";
        }
    }else {
        for (let j = arr[i].length - 1; j >=0; j--){
            result.push(arr[i][j]);
            res += arr[i][j] + " ";
        }
    }
}
//console.log(result);
return result;
}
let arr1 = [[1,2,3],
           [4,5,6],
           [7,8,9]];
let arr2 = [[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]];
console.log(traverseAlternate(arr1));// 1 2 3 6 5 4 7 8 9
console.log(traverseAlternate(arr2));// 1 2 3 4 8 7 6 5 9 10 11 12 16 15 14 13