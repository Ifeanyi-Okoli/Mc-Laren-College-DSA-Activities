//Pythagorean Triplet
//Create a function that validates whether three given integers form a Pythagorean triplet. 
//The sum of the squares of the two smallest integers must equal the square of the largest 
//number to be validated.

// Examples
function isTriplet(num1, num2, num3) {
    
    if (num3 > num2 && num1 > num3) {
        let a = (num3 * num3) + (num2 * num2);
        let b = num1 * num1;
        return a === b ? true : false;
    } 
    else if (num2 > num1 && num2 > num3) {
        let a = (num3 * num3) + (num1 * num1);
        let b = num2 * num2;
        return a === b ? true : false;
    } 
    else {
        let a = (num1 * num1) + (num2 * num2);
        let b = num3 * num3;
        return a === b ? true : false;
    }
    
}

console.log(isTriplet(3, 4, 5)); //➞ true
// 3² + 4² = 25
// 5² = 25

console.log(isTriplet(13, 5, 12)); //➞ true
// 5² + 12² = 169
// 13² = 169

console.log(isTriplet(1, 2, 3)); //➞ false
// 1² + 2² = 5
// 3² = 9
// Note:
// Numbers may not be given in a sorted order.