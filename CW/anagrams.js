// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
// let word = 'abba';
let sortWord = word=>[...word].sort().join("").toLowerCase();
// console.log(sortWord(word));

// function anagrams(word, words) {
//     //sort characters in word
//     let sortedWord = sortWord(word);
//     //storage for anagram
//     let anagrams = [];
//     //iterate over words
//     for(let i = 0; i < words.length; i++){
//         let currentWord = words[i];
//         let currentWordSorted = sortWord(currentWord);
//         if (sortedWord === currentWordSorted) anagrams.push(currentWord);
//     }
//     return anagrams;
// }

//or
// let countLetters = word => Array.prototype.reduce.call(word, (counts, letter) => {
//     letter = letter.toLowerCase();
//     counts[letter] = counts[letter] || 0;
//     counts[letter]++;
//     return counts;
// }, {})

// let looseEqual = (obj1, obj2) => Object.keys(obj1).every(key => obj1[key] === obj2[key]);
// function anagrams(word, words) {
//     let letterCount = countLetters(word);
//     let anagram = [];
//     for(let i = 0; i < words.length; i++){
//         let currentWord = words[i];
//         let currentWordLetterCount = countLetters(currentWord);
//         if (looseEqual(currentWordLetterCount, letterCount)) anagram.push(currentWord);
//     }
//     return anagram;
// }

//or

let countLetters = word => Array.prototype.reduce.call(word, (counts, letter) => {
    letter = letter.toLowerCase();
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
    return counts;
}, {})

let looseEqual = (obj1, obj2) => {
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);
    if(obj1Keys.length !== obj2Keys.length){
        return false;
    }
    return obj1Keys.every(key => obj1[key] === obj2[key]);
}
function anagrams(word, words) {
    let letterCount = countLetters(word);
    return words.filter(currentWord => looseEqual(letterCount, countLetters(currentWord)));
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);

