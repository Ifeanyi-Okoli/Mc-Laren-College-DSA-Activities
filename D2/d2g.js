// Write a function `pickRandomWord` which picks a random word from the given list and returns it.

function pickRandomWord(words) {
    let random = Math.trunc((Math.random() * words.length));
   // console.log(random);
    return words[random];
}
let words = ['respect', 'motion', 'coat', 'confused', 'atten', 'graceful', 'unusual', 'subsequent', 'guide', 'cost', 'medical'];
console.log(pickRandomWord(words));// should print one of the words in the array