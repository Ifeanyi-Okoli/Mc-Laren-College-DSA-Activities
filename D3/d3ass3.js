// Exercise 3 - Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: 
// "I found Nemo at [the order of the word you find nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(str){
    let arr = str.split(" ");
    // console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === "Nemo"){
            return "I found " + arr[i] + " at "  + (i+1) + "!";
        }
    }
    return "I can't find Nemo :(";
}

console.log(findNemo("I am finding Nemo !")); // should return "I found Nemo at 4!"

console.log(findNemo("Nemo is me")); // should return "I found Nemo at 1!"

console.log(findNemo("I Nemo am")); // should return "I found Nemo at 2!"
// Notes
// Nemo will always look like Nemo, and not NeMo or other capital variations.
// Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
// If there are multiple Nemo's in the sentence, only return for the first one.