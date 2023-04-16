let isVowel = (j) => {
    if (j === "a" || j === "e" || j === "i" || j === "o" || j === "u") {
        return true;
    }
    return false;
}

function distanceToNearestVowel(str) {
    let vowelIndexes = [];
    let ans = [];
    let vi = 0;
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            vowelIndexes.push(i);
        }
    }

    for (let i = 0; i < str.length; i++) {
        let dist1 = Math.abs(vowelIndexes[vi] - i);
        let dist2 = Math.abs(vowelIndexes[vi + 1] - i);
        if ((!dist2) && dist2 !== 0) {
            ans[i] = dist1;
        }
        else if (dist1 < dist2) {
            ans[i] = dist1;
        }
        else {
            ans[i] = dist2;
            vi++;
        }
    }
    return ans;
}


console.log(distanceToNearestVowel("aaaaa")); //➞ [0, 0, 0, 0, 0]

console.log(distanceToNearestVowel("babbb")); //➞ [1, 0, 1, 2, 3]

console.log(distanceToNearestVowel("abcdabcd")); //➞ [0, 1, 2, 1, 0, 1, 2, 3]

console.log(distanceToNearestVowel("shopper")); //➞ [2, 1, 0, 1, 1, 0, 1]
// Note: