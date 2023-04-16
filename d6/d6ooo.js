// function areArraysEqual(arr1, arr2) {
//     if (arr1.lenght !== arr2.length) {
//         return false;
//     }
//     else{
//     let identicalValue = (elem, index, arr) => elem === arr2[index];
    
//     return arr1.every(identicalValue);
// }
// }


// const isSubset = (array1, array2) => array2.every(element => array1.includes(element));


let areArraysEqual = (array1, array2) => array2.every(element => array1.includes(element));

let resultTest = areArraysEqual(["G", "F", "C"], ["G", "F", "C"]);
console.log(resultTest);