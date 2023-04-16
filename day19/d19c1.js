//Part2
// Complete the function below to change the value of bottom right corner element to 'X'.


// Note: The change made should not affect the original array.

function bottomRightElementToX(arr) {
    let copyarr = [];
for (let i = 0; i<arr.length; i++){
    let sub = arr[i];
    let copysub =[];
    for (let j = 0; j < sub.length; j++){
        copysub.push(sub[j]);
    }
    copyarr[i] = copysub;
}
let lastrow = arr[arr.length-1];
lastrow[lastrow.length-1] = "X";

return copyarr;
}

let orig1 = [
    [5, 2, 4],
    [4, 1, 7],
    [7, 12, 2]
]
let copy1 = bottomRightElementToX(orig1);
console.log(copy1);
console.log(orig1);

let orig2 = [
    [1, 2, 3, 4],
    [4, 5],
    [7, 8, 9]
]
let copy2 = bottomRightElementToX(orig2);
console.log(copy2);
console.log(orig2);