function average(num1, num2, num3){
    let sum = num1 + num2 + num3;
    return (sum / 3);
}
let x = average(1 + average(4, 10, 2) % 3, 2, average(-2, -2, 10))
console.log(x);

// modulo has higher precedence over plus
/*
EXPRESSION TRACE
Line 5:
average(1 + average(4, 10, 2) % 3, 2, average(-2, -2, 10))
average(1 + 5.333 % 3, 2, average(-2, -2, 10))
*/
