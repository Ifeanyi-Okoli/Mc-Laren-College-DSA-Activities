//Day 7 Morning Challenges
// Note - You will be writing solutions to this exercise in main.js file

// Mowing the Lawn
// Create a function that takes in an array of grass heights and a variable sequence of lawnmower cuts 
//and outputs the array of successive grass heights. If after a cut, any single element in the array 
//reaches zero or negative, return "Done" instead of the array of new heights.

function cuttingGrass(arr, num1, num2, num3){
    let result = [];
    let arr1 = arr.map((x) => x-num1);
    if (arr1.includes(0) || arr1.includes(-1) || arr1.includes(-2) || arr1.includes(-3)){
        result.push("Done");
    }
    else{
        result.push(arr1);
    }
    
    let arr2 = arr1.map((x) => x-num2);
    if (arr2.includes(0) || arr2.includes(-1) || arr2.includes(-2) || arr2.includes(-3)){
        result.push("Done");
    }
    else{
        result.push(arr2);
    }
   let arr3 = arr2.map((x) => x-num3);
    if (arr3.includes(0) || arr3.includes(-1) || arr3.includes(-2) || arr3.includes(-3)){
        result.push("Done");
    }
    else{
        result.push(arr3);
    }
    return result
}

console.log(cuttingGrass([3, 4, 4, 4], 1, 1, 1));// ➞ [[2, 3, 3, 3], [1, 2, 2, 2], "Done"]

// 1st cut shaves off 1: [3, 4, 4, 4] ➞ [2, 3, 3, 3]
// 2nd cut shaves off 1: [2, 3, 3, 3] ➞ [1, 2, 2, 2]
// 3rd cut shaves off 1: [1, 2, 2, 2] ➞ [0, 1, 1, 1], but one element reached zero so we return "Done".
// Examples
console.log(cuttingGrass([5, 6, 7, 5], 1, 2, 1)); // ➞ [[4, 5, 6, 4], [2, 3, 4, 2], [1, 2, 3, 1]]

console.log(cuttingGrass([1, 0, 1, 1], 1, 1, 1)); // ["Done", "Done", "Done"]
// Notes
// The number of lawn cuts is variable.
// There will be at least one cut.
// Return "Done" onwards for each additional cut if the grass has already been completely mowed.