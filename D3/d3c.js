//Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.
function objectToArray(object) {
    let res = [];
    for (let keys in object) {
        res.push([keys, object[keys]]);
    }
    return res;
}
console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
})); // should return [["D", 1], ["B", 2], ["C", 3]]

console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
})); // should return [["likes", 2], ["dislikes", 3], ["followers", 10]]