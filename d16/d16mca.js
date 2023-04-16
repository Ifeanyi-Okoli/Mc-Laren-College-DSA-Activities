
let s = "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

let s1 = "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Notes
// You can assume that the messages are decodable. For example, '001' is not allowed.

let alph = "abcdefghijklmnopqrstuvwxyz";
let len = alph.length;
function msgDecode(str, l) {
    // let l = str.length;
    let count = 0;
    let res = [];
    if (l === 0 || l === 1) return 1;

    if (str[0] <= 0) return 0;

    if (str[l - 1] > 0) count += msgDecode(str, l - 1);

    return count;
}
    
function decode(str){
    let l = str.length;
    if (l === 0 || (l === 1 && str[0] === '0'))
    {
        return 0;
    }
    return msgDecode(str, l);
}

console.log(decode(s));//2
console.log(decode(s1));//3
console.log(decode("12"));//2
console.log(decode("226"));//3
console.log(decode("1"));//1
console.log(decode("112515"));//10
console.log(decode("112515"));//10
console.log(decode("101"));//1
console.log(decode("333344441121"));//5
console.log(decode("1120123121"));//18
console.log(decode("202"));//1
console.log(decode("20"));//1
console.log(decode("2021"));//2

