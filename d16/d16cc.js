function getAllPermutations(arr= []){
    if(arr.length ===1){
        return [[arr[0]]];
    }
let result = [];
for(let i = 0; i < arr.length; i++){
    let curr = arr[i];
    let remainingArr = arr.slice()
    remainingArr.splice(i, 1);
let remainingPerm = getAllPermutations(remainingArr);
remainingPerm.forEach(el=> el.unshift(curr))
result = result.concat(remainingPerm);
}
return result;
};

console.log(getAllPermutations(['a', 'b', 'c'])); // should return [['a', 'b', 'c'], ['a', 'c', 'b'], ['b', 'a', 'c'], ['b', 'c', 'a'], ['c', 'b', 'a'], ['c', 'a', 'b']] 
//or

// function getPermutationsHelper(arr = [], result = []){
//     if(arr.length === 1){
//         result.push(arr[0]);
//         console.log(result);
//     }

//     for (let i = 0; i < arr.length)
// }