// Exercise 2 - Double Character Swap
// Write a function to replace all instances of character c1 with character c2 
// and vice versa.

// Examples

function doubleSwap(str, str1, str2){
    let result = [];
   for (let i = 0; i<str.length; i++){
       if(str[i] === str1){
           result.push(str2);
       }
       else if(str[i] === str2){
        result.push(str1);
    }
    else{
        result.push(str[i]);
    }
   }
    newStr=result.join("");
    return newStr;
}

console.log(doubleSwap( "aabbccc", "a", "b"))// ➞ "bbaaccc"

console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"))
// ➞ "random w&rds writt#n h#r#"

console.log(doubleSwap("128 895 556 788 999", "8", "9"))
// ➞ "129 985 556 799 888"
// Note:
// Both characters will show up at least once in the string.