//Exercise : Slice in Javascript
// slice.md
// Part1
// Use the slice method in Javascript to copy a portion of the array starting from the element 
//'d' till the end of the array into a new array and print the new array. 
//Repeat the same operation for the given string.

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];
let str = "abcdef";
let indexd = alphabets.indexOf('d');
removed = alphabets.slice(indexd);
console.log(removed);

removed1 = str.slice(3);
console.log(removed1);

// Part2
// Use the slice method in Javascript to copy a portion of the array starting from the element 
//'c' till the element 'e' into a new array and print the new array. 
//Repeat the same operation for the given string.

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];
let str = "abcdef";
newAlph = alphabets.slice(3, 5);
console.log(newAlph);

newStr = str.slice(3, 5);
console.log(newStr);



// Part3
// Use the slice method in Javascript to create a complete copy of the given array

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];
newAlph = alphabets.slice();
console.log(newAlph);


// Part4
// Given an email address use the slice method in Javscript to extract the local part 
//(before the @ Symbol) and the domain part (after the @ Symbol) in two different Strings.

// HINT: use the indexOf method to calculate the index of '@'



let email = 'john@example.com';
let atIndex = email.indexOf("@");// write your code here
console.log(atIndex);
let localPart = email.slice(0, atIndex);// write your code here
console.log(localPart);
let domainPart = email.slice(atIndex + 1, email.length);// write your code here
console.log(domainPart);