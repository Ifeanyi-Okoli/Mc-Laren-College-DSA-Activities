//Sort the Unsortable
// In this challenge you will be given an array similar to the following:

[[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single
// integer. We humans can clearly see that this array can reasonably be sorted according 
//to "the content of the elements" as:

[1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according 
//to the "content of the elements".

// Examples

function compareArr(a,b){
    if (a < b || a[0] < b || a < b[0] || a[0] < b[0]) {
        return -1;
      }
      if (a > b || a[0] > b || a > b[0] || a[0] > b[0]) {
        return 1;
      }
      // a must be equal to b
      return 0;
}
function sortIt(arr){
    arr.sort(compareArr);
    return arr;
}

console.log(sortIt([4, 1, 3])); //➞ [1, 3, 4]

console.log(sortIt([[4], [1], [3]])); // ➞ [[1], [3], [4]]

console.log(sortIt([4, [1], 3]));// ➞ [[1], 3, 4]

console.log(sortIt([[4], 1, [3]]));// ➞ [1, [3], [4]]

console.log(sortIt([[3], 4, [2], [5], 1, 6]));// ➞ [1, [2], [3], 4, [5], 6]
// Notes
// To reiterate, elements of the array will be either integers or arrays with a single 
//integer.