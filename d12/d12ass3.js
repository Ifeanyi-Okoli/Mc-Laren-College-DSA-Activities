// Exercise 3 - Split String by Identical Characters
// Create a function that splits a string into an array of identical clusters.

// Examples
let splitGroups =(str)=>{
let result = [];
let str1=str[0];
for (let i = 1; i < str.length; i++){
    loop1:
    if(str[i] !== str[i-1]){
        result.push(str1);
        str1=str[i]
    }
    else{
        str1+=str[i];
    }

}
result.push(str1)
return result;
}

console.log(splitGroups("555"));// ➞ ["555"]

console.log(splitGroups("5556667788"));// ➞ ["555", "666", "77", "88"]

console.log(splitGroups("aaabbbaabbab"));// ➞ ["aaa", "bbb", "aa", "bb", "a", "b"]

console.log(splitGroups("abbbcc88999&&!!!_"));// ➞ ["a", "bbb", "cc", "88", "999", "&&", "!!!", "_"]
// Notes
// Each cluster should only have one unique character.
// The resulting array should be in the same order as the input string.
// Should work with letters, numbers and other characters.

// let strExp = /(.)\1*/gi;
// let  result = str.match(strExp);

// let result = str.match(/(.)\1*/g)