//Challenge 2 - Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the 

// const { stratify } = require("d3-hierarchy");

//full word is completed.
function spelling(str){
    let result = [];
    let a = "";
    for(let i = 0; i <str.length; i++){
        a = a + str[i];
        result.push(a);
    }
    console.log(result);
}
spelling("bee"); // should return ["b", "be", "bee"]

spelling("happy"); // should return ["h", "ha", "hap", "happ", "happy"]

spelling("eagerly");  // should return  ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
// Note - You will be writing solutions to this exercise in main.js file