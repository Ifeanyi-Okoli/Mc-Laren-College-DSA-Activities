// Exercise 4 - Does the Cargo Fit?
// A ship has to transport cargo from one place to another, while picking up cargo along 
// the way. Given the total amount of cargo and the types of cargo holds in the ship as arrays,
// create a function that returns true if all the cargo can fit on the ship, and false if 
//it can't.

// "S" means 50 cargo space.
// "M" means 100 cargo space.
// "L" means 200 cargo space.
// Examples

function willFit(arr, arr1) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
    }
let arr2=[];
for (let key in obj) {
    if (key === "M") {
        obj[key] = obj[key] * 100;
        arr2.push(obj[key]);
    }
    else if (key === "S") {
        obj[key] = obj[key] * 50;
        arr2.push(obj[key]);
    }
    else {
        obj[key] = obj[key] * 200;
        arr2.push(obj[key]);
    }
}
    let sumarr2 = arr2.reduce((acc, curr)=> acc +curr)
    let sumarr1 = arr1.reduce((acc, curr)=> acc +curr)
    return sumarr2 >= sumarr1?true: false;
}


console.log(willFit(["M", "L", "L", "M"], [56, 62, 84, 90]));// ➞ true

console.log(willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70, 80, 90, 200]));// ➞ false

console.log(willFit(["L", "L", "M"], [56, 62, 84, 90]));// ➞ true
// Notes
// Calculate the cargo as a whole, and not for each seperate cargo hold

/*
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
*/