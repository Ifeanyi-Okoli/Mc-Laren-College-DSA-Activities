function average(num1, num2){
    return (num1 + num2) / 2;
}

function squareNum(num) {
    let result = num * num;
    console.log(result);
}

function red(num){
    return num - num * average(0, 6);
}
let res = average(red(3), squareNum(6));
console.log(res);
