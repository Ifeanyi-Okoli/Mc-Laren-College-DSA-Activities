// Challenge 1
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
//determine if the input string is valid. If the given string is valid then return 
//'Valid' otherwise return 'Invalid'.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example

function isValid(str) {
    // console.log(str);
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]]++;
        }
    }

    let m = Object.entries(obj);
    // console.log(m);
    for(let i = 0; i < m.length-1; i++){
        if (m[i][1] !== m[i+1][1]) return "Invalid";
        i++;
    }

    return "Valid";

  }

console.log(isValid('(()))')) //-> 'Invalid'
console.log(isValid('()')) //-> 'Valid'
console.log(isValid('()[]{}')) //-> 'Valid'
console.log(isValid('()({[]})')) //-> 'Valid'
console.log(isValid('()[]({}()')) //-> 'Invalid'



