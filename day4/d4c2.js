let jobTitle = "Nurse";
let hasProgrammingExp = true;
let canEnroll = jobTitle === "Engineer" || hasProgrammingExp;
console.log(canEnroll);

let age = 15;
let isChild = age < 18;
let isAdult = !isChild; // the NOT operator takes one input and produce one output, which is the opposite of the input.
console.log(isChild);
console.log(isAdult);

let age1 = 65;
console.log(!(age1 > 65 === false));



let a = 3;
let b = -2;
let c = a >= b;
console.log(!(a > o || b > 0));
console.log(!!c);
console.log(!(!(a < b) && !c));