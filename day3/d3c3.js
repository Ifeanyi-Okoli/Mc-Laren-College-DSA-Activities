//Exercise Name : Senior Adult
//senior-adult.js
let age = 10;

//Assign a boolean expression to the following variables, such that is has true/false depending on the value of age
// senior citizens are aged above 65, children are aged below 18. Adults are aged above or equal to 18 but less than or equal to 65.
// Here is a gist for reference about how to use the comparsion operator 
// https://gist.github.com/McLarenCollege/692652232372c64f3d067ce9a407e375

let isSenior = age > 65; // write expression
let isAdult = age >= 18 && age <= 65;  // write expression
let isChild = age < 18;  // write expression
console.log(isSenior);
console.log(isAdult);
console.log(isChild);
 