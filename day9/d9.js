//print Greeting Function With Name
// printGreetingFunctionWithName.md
// Create a function that takes two parameters as input : a greeting and the name of a person 
//and returns the appropriate message for that person.

// If the name is not defined do not include the name in the greeting.
function greetPerson(greeting, name){
    if (name === undefined){
        return greeting + "!";
    }else {

    }
    return greeting + ", " + name + "!";
}
console.log(greetPerson("Good Morning", "John")); // should print "Good Morning, John!"
console.log(greetPerson("Good Afternoon", "Peter")); // should print "Good Afternoon, Peter!"
console.log(greetPerson("Namaste", "Raj")); // should print "Namaste, Raj!"
console.log(greetPerson("Namaste")); // should print "Namaste!"