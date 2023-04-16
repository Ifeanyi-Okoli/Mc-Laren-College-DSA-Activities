//Exercise 1: Fibonacci String
// A Fibonacci string is a precedence of the Fibonacci series. It works with any two 
//characters of the English alphabet (as opposed to the numbers 0 and 1 in the Fibonacci 
//series) as the initial items and concatenates them together as it progresses similarly 
//to the Fibonacci series.

// Examples
function fibStr(num, arr){
    let result = [];
    let i = num;
    result.push(arr[0]);
    i--;
    result.push(arr[1]);
    i--;
    while (i >0){
        let a = result[result.length-1] + result[result.length-2];        
        result.push(a);
        i--;
    }
    let str = result.join(", ");
    return str;
}
console.log(fibStr(3, ["j", "h"])); //➞ "j, h, hj"

console.log(fibStr(5, ["e", "a"])); //➞ "e, a, ae, aea, aeaae"

console.log(fibStr(6, ["n", "k"])); //➞ "n, k, kn, knk, knkkn, knkknknk"
// Notes
// All values for n will be at least 2.