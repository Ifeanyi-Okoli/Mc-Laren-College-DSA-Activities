
function hoursPassed(str1, str2) {
    let hours = 0;
    for (let i = 0; i < str1.length; i++) {
        
        if (i === 0 && isNaN(str1[1]) === false) {
            let str = str1[i - 1] + str1[i];
            let strb = str2[i - 1] + str2[i];
            hours = hours + (parseInt(str) - parseInt(strb));
            if(hours>0){
                hours = 12 - hours;
            }
            // console.log(hours);
        }
       else  if (i === 0 && str1[i+1] === ":") {
            hours = hours + Math.abs(parseInt(str2[i]) - parseInt(str1[i]));

        }
        else if (i === 2 || i === 3) {
            hours = hours + (Math.abs(parseInt(str2[i]) - parseInt(str1[i]))) / 60;
        }
    }
    if (str1[str1.length - 2] !== str2[str2.length - 2]) {
        hours = hours + 12;
    }
    if(hours === 0){
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