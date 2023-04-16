// Exercise 3 - Get the Century
// Create a function that takes in a year and returns the correct century.

// Examples

function century(num){
    if(num === 1000){
        return "10th century";
    }
    if(num >1000 && num < 1101){
        return "11th century"
    }
    if(num >1100 && num < 1201){
        return "12th century"
    }
    if(num >1200 && num < 1301){
        return "13th century"
    }
    if(num >1300 && num < 1401){
        return "14th century"
    }
    if(num >1400 && num < 1501){
        return "15th century"
    }
    if(num >1500 && num < 1601){
        return "16th century"
    }
    if(num >1600 && num < 1701){
        return "17th century"
    }
    if(num >1700 && num < 1801){
        return "18th century"
    }
    if(num >1800 && num < 1901){
        return "19th century"
    }
    if(num >1900 && num < 2001){
        return "20th century"
    }
    if(num >2000 && num < 2101){
        return "21st century"
    }
}
console.log(century(1756));// ➞ "18th century"

console.log(century(1555)); // ➞ "16th century"

console.log(century(1000)); //➞ "10th century"

console.log(century(1001)); //➞ "11th century"

console.log(century(2005)); //➞ "21st century"
// Notes
// All years will be between 1000 and 2010.
// The 11th century is between 1001 and 1100.
// The 18th century is between 1701-1800.