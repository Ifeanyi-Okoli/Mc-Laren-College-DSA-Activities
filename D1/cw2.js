//Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

var findDigit = function(num, nth){
    if (nth <= 0 ){
        return -1;
    }
    num = Math.abs(num);
    let nums = "000000000000000000000";
    nums = nums + num;
    return parseInt(nums[nums.length-nth]);
}

console.log((findDigit(5673, 4)));//, 5);
console.log((findDigit(129, 2)))//, 2);
console.log((findDigit(-2825, 3)))//, 8);
console.log((findDigit(-456, 4)))//, 0);
console.log((findDigit(0, 20)))//, 0);
console.log((findDigit(65, 0)))//, -1);
console.log((findDigit(24, -8)))//, -1);