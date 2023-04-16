//Exercise : Increment Element
// incrementElement.md
// Given the following array write the expression to increment the element 11 by 1 and 
//submit the Object Diagram.

// CODE TEMPLATE

let arr = [[[1,[10,11]],[5,6]],[2,3],[5,6]];
// let sub = arr[0][0][1][1];
// sub = sub + 1;
// console.log(sub);
arr[0][0][1][1] += 1;
// console.log(arr);
console.log(JSON.stringify(arr));