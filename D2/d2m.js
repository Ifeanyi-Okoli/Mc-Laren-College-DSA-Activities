let user = {
    name: 'Arnav',
    location: 'Mumbai',
    hobbies: ['code', 'read'],
};

// let name = user.name;// write an expression to access user's name.
// let location = user.location;
// console.log(name, location);
//or
let {name, location} = user;
console.log(name, location);

let {name: userName, location} = user;
console.log(name, location);