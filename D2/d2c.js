// Task 3
// Write a function waterOutlets which takes in the farm and returns total number of water outlets
// in the farm.

function waterOutlets(arr){
let count = 0;
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j <arr[i].length; j++){
        if(arr[i][j] === "W"){
            count++;
        }
               
    }
    }
return count;
}

// Task 4
// A farm is said to be well hydrated if each row has at least one water outlet. Write a function 
//isHydrated which takes in the farm and returns true if it is well hydrated, otherwise false.

// Code Template for this part

function isHydrated(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].includes("W") === false){
            return false
        }
    }
    return true;
}

let farm = [['W', 'C', 'W'], ['C', 'W', 'C'], ['C', 'C', 'C'], ['C', 'C', 'W'], ['C', 'C', 'C']]
// Write function waterOutlets for Task 3 below:


// has 4 water outlets
console.log(waterOutlets(farm)); // should print 4


// Write function isHydrated for Task 4 below:



console.log(isHydrated(farm)); // should print false because 'farm' has 2 rows without any water outlet
let farm2 = [['W', 'C'], ['C', 'W'], ['C', 'W'], ['W', 'W']]
console.log(isHydrated(farm2)); // should print true