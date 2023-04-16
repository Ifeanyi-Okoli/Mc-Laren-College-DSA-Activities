// Challenge 2
// Suppose a hash # represents the backspace key being pressed. Write a 
//function that transforms a string containing # into a string without any #.

function erase(str){
    let arr = str.split("");
    let result = [];
for (let i = 0; i < arr.length; i++){
    if(arr[i] === "#"){
        result.pop();
    }
    else{
        result.push(arr[i]);
    }
}

let str1 = result.join("");
return str1;
}

console.log(erase("he##l#hel#llo"));  //should return "hello"