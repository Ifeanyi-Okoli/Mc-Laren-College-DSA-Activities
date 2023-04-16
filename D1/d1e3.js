// Exercise 3 - Secret Society
// A group of friends has decided to start a secret society. The name will be the first letter of 
//each of their names.

// Create a function that takes in an array of names and returns the name of the secret society

function societyName(arr){
    let name = "";
    for (let i = 0; i < arr.length; i++){
        name += arr[i][0];
    }
    return name;
}

console.log(societyName(["Adam", "Sarah", "Malcolm"])) // should return "ASM"

console.log(societyName(["Harry", "Newt", "Luna", "Cho"])) // should return "HNLC"

console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])) // should return "PCRRMJ"