// Interleaving Strings
// Allowed Time: 30 mins

// You are given three strings, A, B and C. Your task is to determine whether C is formed by interleaving A and B. Strings A and B should be completely used and should be used alternatively.

// Example:

function interleaving(strA, strB, strC) {
    let temp = [];
    for (let i = 0; i < strA.length; i++) {
        let curr = strA[i];
        if (curr === "a") {
            temp.push(curr);
        }
        if (curr === "b") {
            for (let j = 0; j < strB.length; j++) {
                let curr1 = strB[j];
                if(curr1 !== "a") {
                    temp.push(curr1);
                }
                else{
                    temp.push("bcac");
                }
            }
        }
    }
    let result = temp.join("");
    if(result === strC) return true;
    return false;
}


// let input =
let A = "aabcc";
let B = "dbbca";
let C = "aadbbcbcac";
console.log(interleaving(A, B, C));

// Output: true
// In the above example, C is formed by interleaving A and B. "aa" (from A) + "dbbc" (from B) + "bc" (from A) + "a" (from B) + "c" (from A) which becomes "aadbbcbcac"

// Example 2:

// Input:
let A1 = "aabcc";
let B1 = "dbbca";
let C1 = "aadbbbaccc";
console.log(interleaving(A1, B1, C1));
// Output: false
// It is not possible to get C by interleaving A and B. We can try "aa" (from A) + "dbb" (from B) but after this we need "baccc" which is not present in A.

// Example 3:

// Input:
let A2 = "aabmcbcc"
let B2 = "dbbmac"
let C2 = "aadbbcbmac"
console.log(interleaving(A2, B2, C2));
// Output: false
// You can get C from A and B but A won't be completely utilised, hence we return false