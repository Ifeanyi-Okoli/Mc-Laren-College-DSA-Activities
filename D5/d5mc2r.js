function countVowels(str) {
    str.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Celebration"));// should return 5

console.log(countVowels("Palm"));// should return 1

console.log(countVowels("Prediction"));// should return 4
console.log(countVowels("Apple"));// should return 4
// Notes
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.