// Day 9 Morning Challenges
// Allowed Time: 45 minutes

// Note - You will be writing solutions to this exercise in main.js file

// Exercise - Map the Letters in a String
// Given a word, create an object that stores the indexes of each letter 
// in an array.

// Example
function mapLetters(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (!(obj.hasOwnProperty(obj[str[i]]))) {
            obj[str[i]] = [i];
        }

        obj[str[i]][1] = i;

    }
    return obj;
}

console.log(mapLetters("dodo")); // should return { d: [0, 2], o: [1, 3] }