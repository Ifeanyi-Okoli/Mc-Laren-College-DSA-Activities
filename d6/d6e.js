// Instant JAZZ
// Create a function which concantenates the number 7 to the end of every chord in an array and 
//returns a new array with the updated value. Ignore all chords which already end with 7.

// Examples
jazzify(["G", "F", "C"]) //➞ ["G7", "F7", "C7"]

jazzify(["Dm", "G", "E", "A"]) //➞ ["Dm7", "G7", "E7", "A7"]

jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) //➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

jazzify([]) //➞ []

jazzify(["F7", "G", "C", "D7"]) //➞ ["F7", "G7", "C7", "D7"]

function jazzify(arr){
    if (str.lenght-1 !==7){
    let arr1 = arr.map(str+7)  
    console.log(arr1) 
    }
    else{
        return arr
    }
 return arr1;
   }
function add7(str){
    if (str.endsWith("7")){
        return str;
    }else{
        return str + "7";
    }
}
function jazzify(arr){
    let result = arr.map(add7);
}