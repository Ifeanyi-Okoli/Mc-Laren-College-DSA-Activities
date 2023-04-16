//Exercise : Convert String to Object
// convertStringToObject.md
// Part1
// Write a function that creates an Object from the given string with the characters as 
//keys and the values as 'true' for the given key.

// The function should return the consturcted Object.

// CODE TEMPLATE

function createObject(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = true;
        }
    }
    return obj;
}
console.log(createObject("hello"));
console.log(createObject("aeroplane"));
// Part2
// Write a function that checks if a key is repeated in the string by creating an 
//Object for the given string. If a key is repeated the function will return true. 
//If no key is repeated it will return false

function checkRepitition(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] == undefined) {
            obj[str[i]] = true;
        }
        else {
            return true;
        }
    }
    return false;
}
console.log(checkRepitition("hello"));// true
console.log(checkRepitition("zebra"));// false
// Part3
// Write a function that creates an Object from the given string with the characters as 
//keys and the repetitions for the key as values for the key.

function createObjectShowingRepetitions(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        }
        else if (obj[str[i]] !== undefined) {
            obj[str[i]] = 2;
        }
    }
    return obj;
}
console.log(createObjectShowingRepetitions("hello"));
console.log(createObjectShowingRepetitions("aeroplane"));