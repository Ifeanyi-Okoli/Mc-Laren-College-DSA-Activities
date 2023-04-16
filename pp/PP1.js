let num = [1, -1, 2, 5, 7, 9];
// let sum = 0;
// for(let i of num)
// sum += i;
// console.log(sum)

// let sum = num.reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue;
// }, 0);
// console.log(sum);

let sum = num.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);