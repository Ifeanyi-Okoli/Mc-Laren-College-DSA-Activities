// Loop though the sayings array and call each of the function in the array with the value 'John' 
//as the parameter.

let sayHello = function (name) {
    console.log('Hello ' + name);
};

let sayGoodbye = function (name) {
    console.log('Goodbye ' + name);
};

let saySomething = sayGoodbye;

let sayings = [sayHello, sayGoodbye, saySomething];
for (let i = 0; i < sayings.length; i++) {
    sayings[i]("john");
}
