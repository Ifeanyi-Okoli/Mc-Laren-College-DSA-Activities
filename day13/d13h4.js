//iterate SubArray
// iterateSubArray.md
// Given a 2-dimensional array, traverse through the array until you encounter a subarray 
//starting with a value 3. Print the sum of all the numbers traversed.

function iterateSubArray(arr){
    let sum = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i][0] === 3){
        break;
    }
    for (let j = 0; j < arr[i].length; j++){
        sum += arr[i][j];
    }
}
console.log(sum);
}
iterateSubArray([[1,2,4],[0,1,1],[],[3,2],[4,9,11]]);//9  (1+2+4+0+1+1)
iterateSubArray([[1,2,4],[0,3,1],[],[5,2]]);//18 
iterateSubArray([[3,2,4],[0,1,1],[],[5,2]]);//0