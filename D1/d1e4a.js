//Exercise 4 - Find the Bomb
// Create a function that finds the word bomb in the given string. If found, return Duck!!!, 
//otherwise return There is no bomb, relax..

function bomb(str){
    str.toLowerCase();
    if (str.indexOf("bomb") > -1){
        return "Duck!!!"
    }
        
    
    return "There is no bomb, relax.";
}

console.log(bomb("There is a bomb.")); // should return  "Duck!!!"

console.log(bomb("Hey, did you think there is a bomb?"));  // should return "Duck!!!"

console.log(bomb("This goes boom!!!")); // should return "There is no bomb, relax."
// Notes
// bomb may appear in different cases (i.e. uppercase, lowercase, mixed).