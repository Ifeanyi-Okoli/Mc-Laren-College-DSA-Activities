// Is One Array a Subset of Another?
// Create a function that returns true if the first array is a subset of the second. Return false 
//otherwise.

// Code Template
function isSubset(firstArr, secondArr){
for (let i = 0; i < firstArr.length; i++){
    if(!(secondArr.includes(firstArr[i]))){
        return false;
    }
    
}
return true;
}
console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])); // should print true

console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])); // should print true

console.log(isSubset([1, 2], [3, 5, 9, 1])); // should print false
// Hint
// A subset is a list of elements of which all elements are contained in an another list.

// Note
// The arrays will contain unique numbers.