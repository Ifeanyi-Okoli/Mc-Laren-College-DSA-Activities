//You have an array of user objects, each one has user.name. Write the code that converts it 
//into an array of names.

// Note: Write this code using reduce method.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

function getNames(acc, curr){
      acc.push(curr.name);
     return acc;
}
let names = users.reduce(getNames, []);

console.log(names)