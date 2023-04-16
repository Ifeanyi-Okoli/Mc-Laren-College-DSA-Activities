// Exercise 2 - Contact List
// Write a sorting function that takes in an array of names and sorts them 
//by last name either alphabetically (ASC) or reverse-alphabetically (DESC).

// Examples
function sortContacts(arr, str){
    for (let i = 0; i < arr.length; i++){
        let name = arr[i].split(" ");
        let sName= name[0];

    }
}

console.log(sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC")) 
// should return [
//   "Thomas Aquinas",
//   "Rene Descartes",
//   "David Hume",
//   "John Locke"
// ]
// Tip
// You can use the less-than and greater-than operators to compare two strings 
//as described here

//check local compare