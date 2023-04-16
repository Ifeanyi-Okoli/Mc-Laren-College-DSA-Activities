// Exercise 2 - Convenience Store
// Given a total due and an array representing the amount of change in your pocket, determine whether
// or not you are able to pay for the item. Change will always be represented in the following order:
// quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 
// 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples

function changeEnough(arr, num) {
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            amount = amount + arr[i] * 0.25;
        }
        else if (i === 1) {
            amount = amount + arr[i] * 0.10;
        }
        else if (i === 2) {
            amount = amount + arr[i] * 0.05;
        }
        else if (i === 3) {
            amount = amount + arr[i] * 0.01;
        }
    }
    if (amount >= num) {
        return true;
    }
    return false;
}
console.log(changeEnough([2, 100, 0, 0], 14.11)) // should return false

console.log(changeEnough([0, 0, 20, 5], 0.75)) // should return true

console.log(changeEnough([30, 40, 20, 5], 12.55)) // should return true
// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01