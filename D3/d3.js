//Use Object.entries and for…of loop to print property and it’s value
let user = {
    name: 'Arnav',
    location: 'nashik',
    hobbies: ['code', 'read'],
    age: undefined
}
for (let key in user){
    console.log(key);
}