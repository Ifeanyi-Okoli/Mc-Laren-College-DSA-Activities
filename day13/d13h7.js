//last Index Of Gabriel
// lastIndexOfGabriel.md
// Given an array of names find the last index of the name 'Gabriel' in the array. If the name does not exist in the array return -1.

// CODE TEMPLATE

function lastIndexOfGabriel(names) {
    let sub = names.length - 1;
    for (let i = sub; i >= 0; i--) {
        if (names[i] === "Gabriel") {
            return i;
        }
        
    }
    return -1;

}
let names = ["John", "Gabriel", "Steve", "Sam", "Gabriel"];
console.log(lastIndexOfGabriel(names)); // should return 4
names = ["John", "Garry", "Steve", "Sam"];
console.log(lastIndexOfGabriel(names)); // should return -1
names = ["John", "Gabriel", "Steve", "Sam"];
console.log(lastIndexOfGabriel(names)); // should return 1