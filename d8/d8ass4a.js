function product(num1, num2) {
    return function (num3, num4) {
        return function (num5, num6) {
            let result = (num1 * num3 * num5) + (num2 * num4 * num6);
            return result;
        }
    }
}

console.log(product((1,200)(1,1)(2, 3))); //➞ 8
// 1 * 1 * 2 + 2 * 1 * 3

console.log(product((10,2) (5,0) (2,3))); //➞ 100
// // 10 * 5 * 2 + 2 * 0 * 3

// console.log(product([1,2], [2,3], [3,4])); //➞ 30
// // 1 * 2 * 3 + 2 * 3 * 4

// console.log(product([1,2], [0,3], [3,0])); //➞ 0