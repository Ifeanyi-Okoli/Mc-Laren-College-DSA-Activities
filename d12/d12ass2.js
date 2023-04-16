// We'll say that a pair in a string is two instances of a char separated by a char. So in AxA, the A's make a pair.

// Pair's can overlap, so AxAxA contains 3 pairs -- 2 pairs of As and 1 pair of x.

// Your task is to recursively compute the number of pairs in the given string.

// Examples

function countPairs(str){
let count = 0;
for (let i = 0; i < str.length; i++){
    
}
}

console.log(countPairs("axa"));// → 1 
console.log(countPairs("axax"));// → 2 
console.log(countPairs("axbx"));// → 1