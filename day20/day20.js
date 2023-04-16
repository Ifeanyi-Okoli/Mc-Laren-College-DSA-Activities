//Pair Of Socks
// pairOfSocks.md
// Pair of socks
// Determine the number of pair of socks you can constitute from the socks you 
//have in your drawer.

// Given an array describing the color of each sock, return the number of pairs 
//you can constitute, assuming that only socks of the same color can form pairs.

// HINT: Use the for in loop for Objects
// Examples:

// input = ["red", "green", "red", "blue", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "blue", "blue", "blue"]
// result = 3 (2 red pairs + 1 blue pair)
// CODE TEMPLATE

function countPairs(arr){
let pair = {};
let numpair = 0;
for (let i = 0; i < arr.length; i++){
    if (pair[arr[i]] === undefined){
        pair[arr[i]] = 1;
    }else{
        pair[arr[i]]++;
    }
    
}
for(j in pair){
numpair = numpair + Math.floor(pair[j]/2);
}
//console.log(pair);
return numpair;
}
console.log(countPairs(["red", "green", "red", "blue", "blue"])); // 2
console.log(countPairs(["red", "red", "red", "red", "red", "red"]));// 3
console.log(countPairs(["red", "green", "black", "blue", "green"])); // 1
console.log(countPairs(["red", "green", "red", "blue", "blue", "blue"])); // 2
console.log(countPairs(["red", "red", "red", "red", "red", "blue", "blue", "blue"])); // 3