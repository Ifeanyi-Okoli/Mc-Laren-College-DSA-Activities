//Part 2
// Write a function called spellCheck which takes two parameters:

// A test word which may or may not be spelled correctly
// A list of dictionary words
// The function should return the list of dictionary words where the test word is 
//a close match as defined in Part 1.

// CODE TEMPLATE
//Part 2
function spellCheck(word, dictionary) {
    let result = [];
    let len = word.length;

    for (let i = 0; i < dictionary.length; i++) {
        if (word === dictionary[i]) {
            return result;
        }
        else if (len === dictionary[i].length) {
            let count = 0;
            for (let j = 0; j < len; j++) {
                if (word[j] !== dictionary[i][j]) {
                    count++;
                }
            }
            if (count === 1) {
                result.push(dictionary[i])
            }
        }
    }
    return result;
}
let smallDictionary = [
    "jail",
    "sail",
    "cat",
    "table",
    "safe",
    "call",
    "sane",
];
console.log(spellCheck('cail', smallDictionary)); // should return ['jail', 'sail', 'call']
console.log(spellCheck('sane', smallDictionary)); // should return [] because it's correctly spelled
console.log(spellCheck('sate', smallDictionary)); // should return ['safe', 'sane']