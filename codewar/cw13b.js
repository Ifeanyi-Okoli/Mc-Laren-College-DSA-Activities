function getNumberOfSquares(n) {
    let count = 0;
    let sum = 0;
    while (sum < n) {
        count++;
        sum += count ** 2;
        console.log(sum);
    }
    return count - 1;
}

console.log(getNumberOfSquares(1));//, 0
console.log(getNumberOfSquares(2));//, 1
console.log(getNumberOfSquares(5));//, 1
console.log(getNumberOfSquares(6));//, 2
console.log(getNumberOfSquares(15));//, 3