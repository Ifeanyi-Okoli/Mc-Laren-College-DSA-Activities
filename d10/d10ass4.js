// Purge and Organize
// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.
// Examples
function uniqueSort(arr){
    let obj = {};
    let result = [];
    for (let i = 0; i <arr.length; i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]]++;
        }
        obj[arr[i]]= 1;
    }
    for(key in obj){
        result.push(+(key));
    }
    result.sort((a,b) => a - b);
    return result;
}

console.log(uniqueSort([1, 2, 4, 3])); // should return [1, 2, 3, 4]

console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); // should return [1, 2, 3, 4]

console.log(uniqueSort([6, 7, 3, 2, 1])); // should return [1, 2, 3, 6, 7]