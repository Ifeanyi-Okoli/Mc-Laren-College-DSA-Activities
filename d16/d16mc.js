// Challenge - Decode Message
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number 
//of ways it can be decoded.

// Examples
// Example 1:

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
let l = alph.length;
function msgDecode(str) {
    let count = 0;
    let m = str.length;
    let res = [];
    if (m === 0 || m === 1) return count += 1;
    if (str[0] <= 0) return 0;

    if (m === 1) {
        if (str > 0) {
            // res.push(alph[parseInt(i)])
            count++;
        }
    }
    else if (m === 2) {
        for (let i = 0; i < m; i++) {
            if (str[0] > 0) count++;
            if (i - 1 <= 2 && i - 1 > 0 && i <= 6) {
                let a = str[i - 1] + str[i];
                // res.push(alph[parseInt(a)])
                count++;
            }
        }
    }
    else if (m > 2) {
        for (let i = 1; i < m; i++) {
            if (str[0] > 0) count++;
            if (i - 1 <= 2 && i - 1 > 0 && i <= 6) {
                let a = str[i - 1] + str[i];
                // res.push(alph[parseInt(a)])
                count++;
            }
        }
    }
    return count;
}

console.log(msgDecode(s));//2
console.log(msgDecode(s1));//3
console.log(msgDecode("12"));//2
console.log(msgDecode("226"));//3
console.log(msgDecode("1"));//1
console.log(msgDecode("112515"));//10
console.log(msgDecode("112515"));//10
console.log(msgDecode("101"));//1
console.log(msgDecode("333344441121"));//5
console.log(msgDecode("1120123121"));//18
console.log(msgDecode("202"));//1
console.log(msgDecode("20"));//1
console.log(msgDecode("2021"));//2


function decodeWays(code) {
    let n = code.lenght;
    return helper(n - 1, code);
}


function helper(num, code) {
    let ways = 0;
    if (num === 0) {
        if (code[num] === 0) return 0;
        else return 1;
    }
    if (num === -1) return 1;

    if (code[num] === 0) {
        if (code[num - 1] === "1" || code[num - 1] === "2") {
            return helper(num - 2, code);
        }
    }

    if (code[num - 1] === "1" || (code[num - 1] === "2" && parseInt(code[num]) < 7)) {
        ways = helper(num - 1, code) + helper(num - 2, code);
        return ways;
    }

}

console.log(decodeWays("112515"));//10