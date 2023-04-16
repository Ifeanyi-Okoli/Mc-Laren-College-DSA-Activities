/*
  Write a function called `numbersAbove80` which takes in a list of numbers and return a new array 
  //containing all the numbers
  above 80 present in the list. You should call `isAbove80` function inside `numbersAbove80` function.
*/

function isAbove80(number) {
    return number > 80;
}

function isEvenNumber(number) {
    return number % 2 === 0;
}

function isSingleDigit(number) {
    return number >= 0 && number < 10;
}

function numbersAbove80(numbers) {
    let filterFunction = isAbove80;
    let filteredList = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (filterFunction(number)) {
            filteredList.push(number);
        }
    }
    return filteredList;

}

let numbers = [5, 70, 86, 34, 22, 788, 100];

console.log(numbersAbove80(numbers));
console.log(numbersWhichAreEven(numbers));
console.log(numbersWhichAreSingleDigit(numbers));

function numbersWhichAreEven(numbers) {
    let filterFunction = isEvenNumber;
    let filteredList = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (filterFunction(number)) {
            filteredList.push(number);
        }
    }
    return filteredList;
}

function numbersWhichAreSingleDigit(numbers) {
    let filterFunction = isSingleDigit;
    let filteredList = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (filterFunction(number)) {
            filteredList.push(number);
        }
    }
    return filteredList;

}

/*

Duplicate the numbersAbove80 function and create a new function numbersWhichAreEven to return a 
new array containing all even numbers .
Duplicate the numbersAbove80 function and create a new function numbersWhichAreSingleDigit to 
return a new array containing all single digit numbers.
Starter code

function isAbove80(number) {
    return number > 80;
}

function isEvenNumber(number) {
    return number % 2 === 0;
}

function isSingleDigit(number) {
    return number >= 0 && number < 10;
}

function numbersAbove80(numbers) {
    let filterFunction = isAbove80;
    let filteredList = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (filterFunction(number)) {
            filteredList.push(number);
        }
    }
    return filteredList;
}
// Write your functions below this line


*/