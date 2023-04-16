// Potential Friend?
// Given two arrays of two people's different interests, return whether both people have at 
//least two things in common or have exact interests. Return true if there's a potential 
//friend!

// Examples

function isPotentialFriend(arr1, arr2){
    let count =0;
if (arr1.length  === 1 && arr2.length  === 1 && arr1[0] === arr2[0]){
    return true;
}
for (let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j]){
            count++;
        }
    }
}
if(count >= 2){
    return true;
}
return false;
}

console.log(isPotentialFriend(
  ["sports", "music", "chess"],
  ["coding", "music", "netflix", "chess"]
)); // should return true

console.log(isPotentialFriend(
  ["cycling", "technology", "drawing"],
  ["dancing", "drawing"]
)); // should return false

console.log(isPotentialFriend(
  ["history"],
  ["history"]
)); // should return true
// Notes
// Arrays of interests may have varied lengths.