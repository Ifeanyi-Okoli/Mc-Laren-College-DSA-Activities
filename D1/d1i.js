// create a deep copy of the given 2-dimensional array and update the value at the bottom right 
//corner to 90

let matrix = [
    [100, 100, 2],
    [9, 10, 18],
    [3, 4, 8],
];

let arr = [];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j]);
    }
}
arr[arr.lenght - 1] = 90;
console.log(arr);