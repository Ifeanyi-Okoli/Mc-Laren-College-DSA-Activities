//printGreeting.md
//Create a function named printGreeting that accepts the name of a person (for eg. Steve) 
//as a parameter and returns "Good Morning Steve".

// function printGreeting(a){
//     return ("Good Morning " + a);
// }

// console.log(printGreeting("steve"));

function createGreeting(name){
    let result = "Good Morning ";
    result = result + name;
    return result;
}

console.log(createGreeting("steve"));