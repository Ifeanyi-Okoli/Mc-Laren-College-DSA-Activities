// Tasks
// Create an array named vowels and store the five vowels into the array using the push method.
// Using the pop method remove the last two vowels from the array.
// Use the pop method again to remove the last element and collect the removed element in a 
//variable called 'removed'.
// Print the value of the variable 'removed'

let vowels = [];
vowels.push("a", "e", "i", "o", "u");
console.log(vowels);
vowels.pop();// removes the last
vowels.pop();
console.log(vowels);
let removed = vowels.pop();
console.log(vowels);
console.log(removed);
