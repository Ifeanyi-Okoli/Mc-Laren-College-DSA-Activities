// Create a function that takes in an array (slot machine outcome) and returns true if all elements 
// in the array are identical, and false otherwise. The array will contain 4 elements.

// Use .every array method

// Examples
console.log(testJackpot(["@", "@", "@", "@"])) //➞ true

console.log(testJackpot(["abc", "abc", "abc", "abc"])) //➞ true

console.log(testJackpot(["SS", "SS", "SS", "SS"])) //➞ true

console.log(testJackpot(["&&", "&", "&&&", "&&&&"])) //➞ false

console.log(testJackpot(["SS", "SS", "SS", "Ss"])) //➞ false

function testJackpot(arr){
    let firstEL = arr[0]
    let isSameToFirstEl = (slot) => slot === firstEL;
    
    return arr.every(isSameToFirstEl);
    }

   
// Notes
// The elements must be exactly identical for there to be a jackpot.