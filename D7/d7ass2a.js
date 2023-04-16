function daysNumber(num) {
    let days;
    if (num === 1) {
        days = num * 31;
        return days;
    }
    if (num === 2) {
        days = 31 + 31;
        return days;
    }
    if (num === 3) {
        days = 31 + 30 + 31;
        return days;
    }
    if (num === 4) {
        days = 31 + 30 + 31 + 30;
        return days;
    }
    if (num === 5) {
        days = 31 + 30 + 31 + 30 + 31;
        return days;
    }
    if (num === 6) {
        days = 31 + 30 + 31 + 30 + 31 + 31;
        return days;
    }
    if (num === 7) {
        days = 31 + 30 + 31 + 30 + 31 + 31 + 30;
        return days;
    }
    if (num === 8) {
        days = 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
        return days;
    }
    if (num === 9) {
        days = 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
        return days;
    }
    if (num === 10) {
        days = 30 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 31 + 30;
        return days;
    }
    if (num === 11) {
        days = 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 31 + 31 + 29;
        return days;
    }
    if (num === 0) {
        return num;
    }
}

function daysUntil2022(date) {
    let arrDate = date.split("/");
    let a;
    let b;
    for (let i = 0; i < arrDate.length; i++) {
        if (i === 0) {
            a = (12 - arrDate[i]);
            a = (daysNumber(a))
        }
        if (i === 1) {
            b = (31 - arrDate[i]);
        }
        if (b === 0) {
            return "1 day";
        }
    }
    return (Math.ceil(a + b)) + " days";
}
console.log(daysUntil2022("12/28/2021")); // should return "3 days"

console.log(daysUntil2022("1/1/2021")); // should return "366 days"

console.log(daysUntil2022("2/28/2021")); // should return "308 days"

console.log(daysUntil2022("6/30/2021"));//.toStrictEqual("185 days");
console.log(daysUntil2022("10/22/2021"));//.toStrictEqual("71 days");
console.log(daysUntil2022("12/31/2021"));//.toStrictEqual("1 day");