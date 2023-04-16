// Pi String = "CAN I MAKE A GUESS NOWWWWWWW"

let pi = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9];
let helper = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

function pilishString(str) {
    if (str === "") return "";
    let l = str.length;
    let arr = str.split("");
    let res = [];
    let res1 = [];
    let c = arr.length;
    for (let i = 0; i < pi.length; i++) {
        // console.log(arr);
        let a = pi[i];
        res.push(a);
        if (helper(res.slice(0, res.length - 1)) < l && helper(res) >= l) {
            break;
        }
    }
    // let res2;
    for (let j = 0; j < res.length; j++) {
        let res2 = arr.splice(0, res[j]).join("");
        let f = res2.length;
        if (f < res[j]) res2 = res2 + res2[f - 1].repeat(res[j] - f);
        
            res1.push(res2);
        
    }
    
    return res1.join(" ");

}

console.log(pilishString("33314444"));// // "333 1 4444"
// 3.14

console.log(pilishString("TOP"));//// "TOP"
// 3

console.log(pilishString("X"));// // "XXX"
// "X" has to match the same length of the first digit (3)
// The last letter of the word is repeated

console.log(pilishString(""));//➞ ""
// Notes
// The dot that separates the integer part of Pi from the decimal part hasn't to be considered in the function: it's present in Instructions and Examples only for readability.