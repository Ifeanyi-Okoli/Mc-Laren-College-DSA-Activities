// Exercise 5 - Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i] * arr[i] * arr[i];
    }
    return sum;
}
console.log(sumOfCubes([1, 5, 9])); // should return 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

console.log(sumOfCubes([3, 4, 5])); // should return 216

console.log(sumOfCubes([2])) // should return 8

console.log(sumOfCubes([])); // should return 0
// Notes
// If given an empty array, return 0.