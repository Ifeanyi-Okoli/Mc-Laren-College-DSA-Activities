//Split Method
// splitJoin.md
// Create a function that utilizes inbuilt javascript methods to produce the desired output.

let str = "Hello! Good Morning";
function stringManipulation(str){
let str1 = str.split(" ");
console.log(str1);
let str2 = str1.join("*");
return str2;
}
console.log(stringManipulation(str)); // should print "Hello!*Good*Morning"