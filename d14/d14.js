// Use reduce to find the sum of all elements in this matrix.


// let arr = matrix.flat();

// let total =  arr.reduce(acc, curr =>{
//     acc+curr;
// }); // store final answer in this variable.
// console.log(total);

//or

// let addAllElements = (accumulator, curr) => accumulator + curr;

// let addAll = (accumulator, currArr = []) =>{
//     let sum = currArr.reduce(addAllElements);
//     accumulator = accumulator + sum;
//     console.log(accumulator);
//     return accumulator;
// }

// console.log(addAll(matrix));


//or
let matrix = [[1124, 24, 15, 17],[9798, 53, 4775, 3255],[645, 757, 41, 436]];

let sum = (acc, cur)=>{
    if (typeof cur === "object"){
        cur = cur.reduce(sum, 0);
    }
    return cur + acc;
}

let total = matrix.reduce(sum, 0);
console.log(total);