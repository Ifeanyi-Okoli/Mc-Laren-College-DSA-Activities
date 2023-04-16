function sortNum(a, b) {
    return a - b;
}

function minSum(arr) {
    arr.sort();
    arr.sort(sortNum);
    let l = arr.length;
    let sum = 0;
    let j = l - 1;
    for (let i = 0; i < l / 2; i++) {
        if (j >= l / 2) {
            sum = sum + arr[i] * arr[j];
            j--;
        }
    }
    return sum;
}

console.log(minSum([5, 4, 2, 3]));//, 22
console.log(minSum([12, 6, 10, 26, 3, 24]));//, 342
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));//, 74