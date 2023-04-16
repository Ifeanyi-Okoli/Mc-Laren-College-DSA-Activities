
function interleaving(strA, strB, strC) {
    let temp = [];
    let count = 0;
    for (let i = 0; i < strA.length; i++) {
        let curr = strA[i];
        if (curr === "a") {
            temp.push(curr);
            count++;
        }
        if (curr === "b") {
            A:
            for (let j = 0; j < strB.length; j++) {
                let curr1 = strB[j];
                if(curr1 !== "a") {
                    temp.push(curr1);
                }
                else{
                    // temp.push("bcac");
                    for(let i = count; i<strA.length; i++){
                        let curr = strA[i];
                        
                    }
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