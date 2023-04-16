//Traverse Array Columnwise
// traverseArrayColumnwise.md
// Given an multi-dimensional array, traverse the array column-wise and print 
//the maximum value of every column

function traverseColumnwise(arr){
let max = "";
let max1 = 0;
let max2 = 0;
let max3 = 0;
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        if (j === 0){
            if(arr[i][j] > max1){
                max1 = arr[i][j];
            }
        }
        else if (j === 1){
            if(arr[i][j] > max2){
                max2 = arr[i][j];
            }
        }
        else if (j === 2){
            if(arr[i][j] > max3){
                max3 = arr[i][j];
            }
        }
    }
}
console.log(max1 + " " + max2 + " " + max3);
}
let arr1 = [[11, 2, 3],
            [ 4,15, 6],
            [ 7, 8, 9]];
let arr2 = [[ 1, 2, 3,44],
            [25, 6, 7, 8],
            [ 9,10,11,12],
            [13,14,15,16]];
traverseColumnwise(arr1);//11 15 9
traverseColumnwise(arr2);// 25 14 15 44