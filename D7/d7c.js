//Create a function groupById(arr) that creates an object from it, with id as the key, 
//and array 
//items as values.

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];


let modifyObj = (acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}

function groupById(usersArr) {
    return usersArr.reduce(modifyObj, {});
}
let usersById = groupById(users);
console.log(usersById)
