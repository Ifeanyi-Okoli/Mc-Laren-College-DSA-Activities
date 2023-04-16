//Split Method
// splitJoin.md
// Create a function that utilizes inbuilt javascript methods to produce the desired output.

let str = "Hello! Good Morning";
function stringManipulation(str){
    let words = str.split(" ");
    console.log(words);
}
console.log(stringManipulation(str)); // should print "Hello!*Good*Morning"
// HINT: Read about the .split method for strings. You have to use .split and .join for this problem.