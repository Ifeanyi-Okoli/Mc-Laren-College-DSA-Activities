// Exercise 6 - Phone Number Formatting (Optional)
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of 
//those numbers formatted as a phone number (e.g. (555) 555-5555).

function formatPhoneNumber(arr) {
    arr.splice(0, 0, "(");
    arr.splice(4, 0, ") ");
    arr.splice(8, 0, "-");
    let str = arr.join("");
    for (let i = 0; i < str.length; i++) {
        if (i === 4) {
            str[i] = str[i] + ") ";
        }
        if (i === 9) {
            str[i] = str[i] + " ";
        }
    }
    return str;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // should return "(123) 456-7890"

console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); // should return "(519) 555-4468"

console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])) // should return "(345) 501-2527"
// Notes
// Don't forget the space after the closing parenthesis.