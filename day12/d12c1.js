//Check for Gabriel
// checkForGabriel.md
// Given an array of names check if the name 'Gabriel' exists in the array.

// If the name exists return true, otherwise return false.

// CODE TEMPLATE

function checkForGabriel(arr){
    let i = 0;
    while (i < arr.length){
        if (arr[i] === "Gabriel"){
            return true;
        }
            i++;
           }
    return false;
}

console.log(checkForGabriel(["John", "Gabriel", "Steve", "Sam"])); // should return true
console.log(checkForGabriel(["John", "Garry", "Steve", "Sam"])); // should return false