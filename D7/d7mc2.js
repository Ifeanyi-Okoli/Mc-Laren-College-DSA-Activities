// Challenge 2
// Suppose a hash # represents the backspace key being pressed. Write a 
//function that transforms a string containing # into a string without any #.

function erase(str){
    let arr = str.split("");
for (let i = 0; i < arr.length; i++){
    if(arr[i] === "#" && i !== 0){
        arr.splice(i-1, 2)
    }
}
for (let i = 0; i < arr.length; i++){
    if(arr[i] === "#" && i !== 0){
        arr.splice(i-1, 2)
    }
}
let str1 = arr.join("");
return str1;
}

console.log(erase("he##l#hel#llo"));  //should return "hello"