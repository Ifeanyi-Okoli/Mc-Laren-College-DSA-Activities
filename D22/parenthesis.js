// Find closing paranthesis
// Write a function closingParanthesis which takes a string with brackets and an index of an opening bracket - you have to return the index of the matching closing bracket.

// An opening brace will always have a closing brace. Return -1 if there is no answer

// Examples


function closingParanthesis(str, num){
    let countParanthesis = 0;
    if(str[num] !== "(") return -1;
    for(let i = num+1; i< str.length; i++){        
        if(str[i] === str[num]) countParanthesis++;
        else if(str[i] === ")") countParanthesis--;
        if(countParanthesis < 0) return i;

    }
}

console.log(closingParanthesis("((1)23(45))(aB)", 0)); // should return 10
console.log(closingParanthesis("((1)23(45))(aB)", 2)); // should return -1


