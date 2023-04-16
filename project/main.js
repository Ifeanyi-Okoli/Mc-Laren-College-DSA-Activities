const readlineSync = require("readline-sync")
let words = [
    'dome', 'charlatan', 'prairie', 'result',
    'gliding', 'effect', 'institution', 'march',
    'lemonade', 'celeriac', 'continent', 'distance',
    'pecan', 'canal', 'carbon', 'instantiation',
    'recess', 'pound', 'jewellery', 'vegetarian',
    'riding', 'illustration', 'macaroni', 'info',
    'increase', 'neuron', 'therapy', 'legislator',
    'arthur', 'ranger', 'rawhide', 'acquisition',
    'fine', 'event', 'accuracy', 'blue',
    'consequence', 'toast', 'brake', 'tosser',
    'drawing', 'sneaker', 'crook', 'intentionality',
    'plier', 'cemetery', 'arch', 'atmosphere',
    'seep', 'influx', 'piglet', 'oatmeal',
    'spouse', 'tablecloth', 'beheading', 'atheist',
    'daikon', 'armament', 'utility', 'ruffle',
    'factor', 'shoemaker', 'loquat', 'someplace',
    'sprout', 'entertainment', 'linguist', 'kitty',
    'volunteer', 'forte', 'journey', 'ability',
    'distribution', 'rhythm', 'depression', 'sewer',
    'privacy', 'dictaphone', 'prejudice', 'kiss',
    'ruckus', 'choker', 'hacienda', 'determination',
    'vest', 'mistake', 'trick', 'pliers',
    'eligibility', 'widow', 'hawk', 'nicety',
    'vine', 'dissemination', 'alcohol', 'upstairs',
    'coupon', 'diagram', 'corporal', 'apartment'
]

//   let randomWord = words[Math.floor(Math.random() * words.length)];
//   console.log(randomWord);

const getRandomWOrd = (words) => {
    let randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}

//underscores

const createHiddenWord = (word) => {
    let hiddenWord = []
    for (let i = 0; i < word.length; i++) {
        hiddenWord.push("_")
    }
    return hiddenWord
}

const isLetterInWord = (letter, word) => {
    return word.includes(letter);
}

// const createHiddenWord2 = (word) => {
//     let hiddenWord = word.split("").map(char => {return "_"})
//     return hiddenWord
// }

//2. Repace underscore where match is found
const replaceMatches = (letter, randomWord, hiddenWord) => {
    for (let i = 0; i < randomWord.length; i++){
        let crrChar = randomWord[i];
        if (crrChar === letter){
            hiddenWord[i] = letter;
        }
    }
    return hiddenWord;
}

// let result = replaceMatches("a", "car", ["_", "_", "_"]);
// console.log(result);

const startGame = () => {
    let randomWord = getRandomWOrd(words);
    let hiddenWord = createHiddenWord(randomWord);
    console.log(hiddenWord.join(""));
    console.log(randomWord);
    
    //2. Replace underscore where match is found.
let tries = 6;
while (tries>1 || !(hiddenWord.join("") === randomWord)){
    console.log("=======================");
    console.log(`=> Tries: ${tries}`)
    const answer = readlineSync.question('Type a letter: ');
    console.log("You typed =>", answer);
    //1. check user answer against randomWord.
    if (isLetterInWord(answer, randomWord)) {
        console.log("Yay!! the letter is in the word");
         hiddenWord = replaceMatches(answer, randomWord, hiddenWord);
    }
    else{
        tries--;
        console.log("Nope!! the letter is NOT in the word")
    }

}

}

startGame();