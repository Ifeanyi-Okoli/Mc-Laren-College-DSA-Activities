// Challenge 3 - Mexican Wave of Characters
// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// Here is a gif for your understanding

// Task
// In this challenge your task is to create a function that turns a string into a Mexican Wave. You will be passed a string str and you must return that string in an array where an uppercase letter is a person standing up.

// Example

function wave(str){
    let result = [];
    for(let i = 0; i < str.length; i++){
        let sub = str[i];
        if(sub !== " "){
            result.push(str.replace(sub, sub.toUpperCase()))
        }
        
    }
    return result;
}


console.log(wave("hello")); // should return ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("two words")); // should return ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
