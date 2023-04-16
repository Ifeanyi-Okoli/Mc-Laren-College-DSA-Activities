// 1. Find total of 2-D Array of arrays of numbers. eg. [[1, 2], [3, 4]]
let matrix = [[1, 2], [3, 4], [5, 7], [11, 13]];
let addSubArrays = (sumSoFar, currArr = []) =>{
    let subTotal = currArr.reduce((acc, currEl) => acc + currEl);
    return subTotal + sumSoFar;
}
let total1 = matrix.reduce(addSubArrays, 0);    
console.log(total1);


// 2. Find total of 2-D Array of items which can be numbers or an array: [[1, 2], 4, 5, [6, 7]]

let matrix2 = [[1, 2], 4, 5, [6, 7], 8, [9, 10]];
let addAllElements = (acc, currElement)=> {
    if(typeof currElement === "number"){
        acc += currElement;
        return acc;
    } else{
        
        let subTotal = currArray.reduce((acc, currEl) => acc + currEl);
        return acc + subTotal;
    }
}
let total2 = matrix2.reduce(addAllElements, 0);// final answer for part 2 here

console.log("Total 2", total2);
// // 3. Find total of N-D Array of items which can be numbers or an array: [[1, 2], 4, 5, [[6, 4, [1, 2]], 7]] (HomeWork)

// let matrix3 = [
//   [1, 1, [4, [0, 1, 2], 2]],
//   6, 1,
//   [8, -4],
//   2
// ];
// let total3 = ;// final answer for part 3 here