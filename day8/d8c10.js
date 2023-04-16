//averageRedGuessOutput.js
function average(num1, num2) {
    return (num1 + num2) / 2;
}

function red(num) {
    return num - num * average(0, 6);
}

function squareNum(num) {
    let result = num * num;
    console.log(result);
}

let res = average(red(3), squareNum(6));

console.log(res);
/*
FUNCTION TRACE
red(3)
  average(0, 6)
    return 3
  return -6  

squareNum(6)
  return undefined

average(-6, undefined)
  return NaN
*/