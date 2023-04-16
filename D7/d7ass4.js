//Exercise 4 - Amateur Hour
// Write a function that takes time t1 and time t2 and returns the number of hours passed 
//between the two times.

// Examples
function hoursPassed(str1, str2) {
    let hours = 0;
    for (let i = 0; i < str1.length; i++) {
        if (i === 0 && str1[i + 1] === ":") {
            hours = hours + Math.abs(parseInt(str2[i]) - parseInt(str1[i]));
        }
        else if (i === 0 && str1[i + 1] !== ":") {
            let str = str1[i] + str1[i + 1];
            let strb = str2[i] + str2[i + 1];
            hours = hours + (parseInt(str) - parseInt(strb));
            if (hours > 0) {
                hours = 12 - hours;
            }
        }

    }
    if (str1[str1.length - 2] !== str2[str2.length - 2]) {
        hours = hours + 12;
    }
    if (hours === 0) {
        return "no time passed";
    }
    return hours + " hours";
}

console.log(hoursPassed("3:00 AM", "9:00 AM")); // ➞ "6 hours"

console.log(hoursPassed("2:00 PM", "4:00 PM"));// ➞ "2 hours"

console.log(hoursPassed("1:00 AM", "3:00 PM"));// ➞ "14 hours"
console.log(hoursPassed("2:00 AM", "3:00 PM")); // ➞ "13 hours"

console.log(hoursPassed("8:00 AM", "8:00 PM"));// ➞ "12 hours"

console.log(hoursPassed("12:00 AM", "10:00 PM"));// ➞ "22 hours"
console.log(hoursPassed("1:00 AM", "1:00 AM"));// ➞ "no time passed"

console.log(hoursPassed("12:00 PM", "12:00 PM"));// ➞ "no time passed"
// Notes
// Time t1 will always be the starting time and t2, the ending time.
// Return the string "no time passed" if t1 is equal to t2.