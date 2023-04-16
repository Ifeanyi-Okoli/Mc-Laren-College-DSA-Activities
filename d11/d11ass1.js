// Exercise 1 - It's a Meteor!
// In a video game, a meteor will fall toward the main character's home planet. Given 
//the meteor's trajectory as a string in the form y = mx + b and the character's 
//position as an array pair of [x, y], return true if the meteor will hit the character 
//and false if it will not.

// Examples

function willHit(str, arr) {
    let arrx = str.split(" ");
    let y = arr[1];
    let b = parseInt(arrx[3] + arrx[4]);
    let x = parseInt(arrx[2]) * arr[0] + b;
    return y === x ? true : false;
}

console.log(willHit("y = 2x - 5", [0, 0]));// ➞ false

console.log(willHit("y = -4x + 6", [1, 2]));// ➞ true

console.log(willHit("y = 2x + 6", [3, 2]));// ➞ false
// Notes
// The b value will never be zero or blank.
// The m value will always be an integer.

console.log(willHit("y = -4x + 6", [2, 2]));//.toBe(false);
console.log(willHit("y = 3x - 8", [4, 4]));//.toBe(true);
console.log(willHit("y = -3x + 15", [5, 0]));//.toBe(true)