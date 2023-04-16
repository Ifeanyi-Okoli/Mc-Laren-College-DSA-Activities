// Exercise 1 - Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.

// Examples
console.log(hashPlusCount("###+")); // should return [3, 1]

console.log(hashPlusCount("##+++#")); // should return [3, 3]

console.log(hashPlusCount("#+++#+#++#")); // should return [4, 6]

console.log(hashPlusCount("")); // should return [0, 0]
// Notes
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].
function hashPlusCount(str){
    let res = [];
    let count = 0;
    let count1 = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i] === "#"){
            count++;
        }
        else{
            count1++;
        }
    }
    res.push(count);
    res.push(count1);
    return res;
}