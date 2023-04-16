//reduce function is used where you have to take all the elements of an array and produce a single value from them.
// the reduce function takes 2 arguments: a function and an initial value for accumulator.
//the function in reduce function takes two arguments: accumulator and the current value.
let arr = [1, 5, 6, 9, 5, 3, 2];

//sum

//max

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

let output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output);

let output1 = arr.reduce(function (acc, curr) {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0)

console.log(output1);