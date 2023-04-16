// create a deep copy of the given 2-dimensional array and update the value at the bottom right 
//corner to 90

let matrix = [
    [100, 100, 2],
    [9, 10, 18],
    [3, 4, 8],
];

let arr = [];
for (let i = 0; i < matrix.length; i++) {
    let temparr = [];
    for (let j = 0; j < matrix[i].length; j++) {
        temparr.push(matrix[i][j]);
    }
    arr.push(temparr);
}
// let lastrowidx= arr.length-1;
// let lastcolidx=lastrowidx.length-1;
// arr[lastrowidx][lastcolidx] = 90;
arr[2][2] = 90;
console.log(arr);
