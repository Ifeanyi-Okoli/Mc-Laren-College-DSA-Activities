//Exercise : Double Odd Numbers
// doubleOddNumbers.md
// Create a while loop that multiplies all the odd numbers that occur in an array by 2 
//and print the modified array.

// CODE TEMPLATE

let arr = [1, 2, 4, 5, 6, 8, 9, 8, 7, 8, 4];
let i = 0;
while (i < arr.length) {
    if (arr[i] % 2 !== 0) {
        arr[i] = arr[i] * 2;
    }
    i++;
}
console.log(arr);// should print [2, 2, 4, 10, 6, 8, 18, 8, 14, 8, 4]