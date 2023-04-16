//Part-2
// Write a function that accepts two strings and checks whether the first string 
//is an anagram of the second string. If yes, the function returns true , else it 
//returns false. The case(upper/lower)of the character does not matter.

// Hint : Use toLowerCase()/ toUpperCase() methods

// For eg.

function isAnagarm(str1,str2){
let len1 = str1.length;
let len2 = str2.length;
if (len1 !== len2){
    return false;
}
let arr1= str1.toLowerCase().split("");
let arr2= str2.toLowerCase().split("");
arr1.sort();
arr2.sort();
for (let i=0; i< len1; i++){
    if(arr1[i] !==arr2[i]){
        return false;
    }
    
}
return true;
}
console.log(isAnagarm("Silent","liSten"));//=>true

console.log(isAnagarm("Brag","Grab"));//=>true

console.log(isAnagarm("Stressed", "Desserts"));// =>true

console.log(isAnagarm("Camel","Car"));//=>false
//HINT:Here is how to loop over the properties of an Object .

let myObj = {name:'Raj', age:20, isConnected:true };
let keys = Object.keys(myObj);
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log('Property key: ', key, ' Value: ', myObj[key]);
}