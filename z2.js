
function unique(arr, num) {
    for (let j = 0; j < arr.length; j++) {
        if (num === arr[j]) {
            return false;
        }
    }
    return true;
}

function sumOfUniques(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (unique(arr2, arr1[i])) {
            sum = sum + arr1[i];
        }
    }
    for (let k = 0; k < arr2.length; k++) {
        if (unique(arr1, arr2[k])) {
            sum = sum + arr2[k];
        }
    }
    return sum;
}
console.log(sumOfUniques([1, 2, 3], [5, 3, 2])); //6
console.log(sumOfUniques([1, 2, 0, 3], [5, 3, 2, 1])); //5
console.log(sumOfUniques([1, 2, 0, 3], [5, 4, 8, 9])); //32
console.log(sumOfUniques([1, 2, 0, 3], [0, 1, 3, 2])); //0
console.log(sumOfUniques([1, 2, 7, 3, 8], [7, 3, 2, 1]));//  8 