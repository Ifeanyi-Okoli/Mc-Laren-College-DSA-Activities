function piping(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "1") count++;
    }
    return count;
}

function floorPlan(arr) {
    let count = 0;
    let countArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let a = piping(arr[i]);
        if (a > 0) {
            countArr.push(a);
        }

    }
    if (countArr.length === 1) return 0;
    for (let j = 0; j < countArr.length - 1; j++) {
        sum = sum + (countArr[j] * countArr[j + 1]);
    }
    return sum;
}

console.log(floorPlan(["011001", "000000", "010100", "001000"])) //=> 8
console.log(floorPlan(["000", "111", "000"])) //=> 0
