//Exercise : Anagram
// Anagrams.md
// Part-1
// Write a function that accepts two strings and checks whether the first string is an anagram of 
// the second string. If yes, the function returns true , else it returns false. The 
// case(upper/lower)of the character MATTERS.

// For eg.

function isAnagarm(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;
    if (n1 !== n2) {
        return false;
    }
    let strA = str1.split("");
    let strB = str2.split("");
    strA.sort();
    strB.sort();
    for (let i = 0; i < n1; i++) {
        if (strB[i] !== strA[i]) {
            return false;
        }
    }
    return true;
}
console.log(isAnagarm("Silent", "liSten"));//=>true

console.log(isAnagarm("Silent", "Listen"));//=>false

console.log(isAnagarm("Stressed", "desSerts"));// =>true

console.log(isAnagarm("StresSed", "desSertS"));//=>true

console.log(isAnagarm("StresSeD", "DeSsertS"));//=>true

console.log(isAnagarm("StresSed", "DesSertS"));//=>false