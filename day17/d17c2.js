//Tasks
// Create an array called vowels and store the five vowels into it.
// Using the .shift and .push methods remove the vowel at the beginning of the array and place 
//it at the end.
// Using the .pop and .unshift method remove the vowel at the end and place it again at the 
//beginning.

let vowels = [];
vowels.push("a", "e", "i", "o", "u");
console.log(vowels);
removed = vowels.shift();
console.log(vowels);
console.log(removed);
vowels.push(removed);
console.log(vowels);
removed = vowels.pop();
console.log(vowels);
console.log(removed);
vowels.unshift(removed);
console.log(vowels);
