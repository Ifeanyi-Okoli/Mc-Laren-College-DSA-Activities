// Subtract Big Numbers
// Allowed Time: 40 mins

// We need to subtract big numbers and we require your help. By Big we mean that the whole string can't be fit in Number data type so you can't just typecast the string to number and find the difference.

// Write a function that returns the difference of two numbers. The input numbers are strings and the function must return a string.

// Examples

function subtractBigNums(str1, str2) {
    let result = parseInt(str1) - parseInt(str2);
    let result1 = result.toString();
    return JSON.stringify(result1);

}

console.log(subtractBigNums('10051515135', '8412512')); // should return '10043102623'
console.log(subtractBigNums('12612363912306306312009881', '1284612399923200255129015'));  // should return '11327751512383106056880866'