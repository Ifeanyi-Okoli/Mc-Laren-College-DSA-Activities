// Exercise 5 - Distance to Nearest Vowel
// Write a function that takes in a string and for each character, returns 
//the distance to the nearest vowel in the string. If the character is a 
//vowel itself, return 0.

// Examples

let isVowel = (j) => {
    if (j === "a" || j === "e" || j === "i" || j === "o" || j === "u") {
        return true;
    }
    return false;
}

function distanceToNearestVowel(str) {
    let vowels = "a, e, i, o, u";
    let index = [];
    let res = [];
    let k = 0;
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            index.push(i);
        }
    }
    for (let i = 0; i < str.length; i++) {
        let dist1 = Math.abs(index[k] - i);
        let dist2 = Math.abs(index[k + 1] - i);

        if (!(dist2) && !(dist2 === 0)) {
            res[i] = dist1;
        } else if (dist2 > dist1) {
            res[i] = dist1;
        }
        else {
            res[i] = dist2;
            k++;
        }
    }
    return res;
}



console.log(distanceToNearestVowel("aaaaa")); //➞ [0, 0, 0, 0, 0]

console.log(distanceToNearestVowel("babbb")); //➞ [1, 0, 1, 2, 3]

console.log(distanceToNearestVowel("abcdabcd")); //➞ [0, 1, 2, 1, 0, 1, 2, 3]

console.log(distanceToNearestVowel("shopper")); //➞ [2, 1, 0, 1, 1, 0, 1]
// Note:
// All input strings will contain at least one vowel.
// Strings will be lowercased.
// Vowels are: a, e, i, o, u.