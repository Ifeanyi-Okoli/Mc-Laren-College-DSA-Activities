// Calculate readability
// Allowed time: 55 minutes

// We will use the Flesch–Kincaid Grade Level to evaluate the readability of a piece of text. This grade level is an approximation for what schoolchildren are able to understand a piece of text. For example, a piece of text with a grade level of 7 can be read by seventh-graders and beyond.

// The way to calculate the grade level is as follows:

// (0.39 * average number of words per sentence) + (11.8 * average number of syllables per word) - 15.59
// Write a function that will calculate the Flesch–Kincaid grade level for any given string. Return the grade level rounded to two decimal points.

// Ignore hyphens, dashes, apostrophes, parentheses, ellipses and abbreviations.

// Remember that the text can contain more than one sentence: code accordingly!

// HINT: Count the number of vowels as an approximation for the number of syllables, but count groups of vowels as one (e.g. deal is one syllable). Do not count y as a vowel!

// Example
// "The turtle is leaving." //==> 3.67
// The average number of words per sentence is 4 and the average number of syllables per word is 1.5. The score is then (0.39 * 4) + (11.8 * 1.5) - 15.59 = 3.67

function fleschKincaid(str) {
    let arr1 = str.split(". ");
    let k = arr1.length;
    let count3 = 0;
    let count4 = 0;
    let count = 0;
    let count2 = 0;
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let arr = str.split(" ");
    let d = arr.length;
    let arr2;
    if (k > 1) {        
        arr2 = arr1.splice(0, 1);
        let d1= arr1.lenght;
        let d2 = arr2.length;
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr1[i].length; j++) {
                if (vowels.includes(arr1[i][j])) {
                    count++;
                }
                if (vowels.includes(arr1[i][j]) && vowels.includes(arr1[i][j + 1])) {
                    count2++;
                }
            }
        }
        for (let i = 0; i < arr2.length; i++) {
            for (let j = 0; j < arr2[i].length; j++) {
                if (vowels.includes(arr2[i][j])) {
                    count3++;
                }
                if (vowels.includes(arr2[i][j]) && vowels.includes(arr2[i][j + 1])) {
                    count4++;
                }
            }
        }
        let numSyllable1 = count - count2;
        let numSyllable2 = count3 - count4;
                // console.log(numSyllable);
        let avgSyllable1 = numSyllable1 / d1;
        let avgSyllable2 = numSyllable2 / d2;
        let score1 = (0.39 * d1) + (11.8 * avgSyllable1) - 15.59;
        let score2 = (0.39 * d2) + (11.8 * avgSyllable2) - 15.59;
        let score = score1 + score2;
        return Number.parseFloat(score).toFixed(2);
    }
    else{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (vowels.includes(arr[i][j])) {
                count++;
            }
            if (vowels.includes(arr[i][j]) && vowels.includes(arr[i][j + 1])) {
                count2++;
            }
        }
    }
    let numSyllable = count - count2;
    let avgWord = d / k;
    // console.log(numSyllable);
    let avgSyllable = numSyllable / avgWord;
    let score = (0.39 * avgWord) + (11.8 * avgSyllable) - 15.59;
    return Number.parseFloat(score).toFixed(2);
}
}

console.log(fleschKincaid("The turtle is leaving."));// == 3.67)
console.log(fleschKincaid("To be or not to be. That is the question.")); // == -0.66)
