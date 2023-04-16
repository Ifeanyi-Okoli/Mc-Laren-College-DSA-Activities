//serializeNestedArray
// serializeNestedArray.md
// Given a nested array, write a function to serialize the array i.e return a one-dimensional array 
//containing all the elements. NOTE: Dont use the .push method.

// CODE TEMPLATE

// function serialize(arr) {
//     let result = [];
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             result[count] = arr[i][j];
//             count++;
//         }
//     }
//     return result;
// }
// let arr = [[true, 'true', false], [2], [2, 3, 4], [], [1]];
// console.log(serialize(arr));//[true,'true',false,2,2,3,4,1]

//or

function serialize(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result[result.length] = arr[i][j];
        }
    }
    return result;
}
let arr = [[true, 'true', false], [2], [2, 3, 4], [], [1]];
console.log(serialize(arr));//[true,'true',false,2,2,3,4,1]