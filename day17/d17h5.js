//joinDemo.md
// Given an array of charcters

// let chars = ['a', 'b', 'c']
// Create a function that uses the .join method to produce the following string.

'a,b,c abc a-b-c'
let chars = ['a', 'b', 'c'];
function useJoinDemo(chars){
let str1 = chars.join(",");
console.log(str1);
let str2 = chars.join("");
console.log(str2);
let str3 = chars.join("-");
return str1 + " " + str2 + " " + str3;
}
console.log(useJoinDemo(chars));// should print 'a,b,c abc a-b-c'