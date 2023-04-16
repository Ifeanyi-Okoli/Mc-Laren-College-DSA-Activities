//Most Frequent Element in an Array
// mostFrequentElement.md
// Create a function that takes an array and returns a new array containing the 
//most frequently occuring elements in it.

function mostFrequentElement(arr){
let result = [];
let obj ={};
let res =0;
for (let i = 0; i < arr.length; i++){
    if (obj[arr[i]] === undefined){
        obj[arr[i]] = 1;
    }
    else{
        obj[arr[i]]++;
    }
}
let res1 = Object.values(obj);
for (let j = 0; j < res1.length; j++){
    if (res1[j] > res1[j+1]){
        res = res1[j];
    }else if(res1[j] < res1[j+1]){
        res=res1[j+1];
    }else{
        result.push(res1[j+1], res1[j]);
    }
}
// for (j in obj){
//     res = res + obj[j];
//     console.log (res)
// if (obj[arr][j] > obj[arr][j]){
//     res = obj[arr][j];
//     //j++;
// } 
// else if (obj[arr][j] < obj[arr][j]){
//     res = obj[arr][j+1];
//     //j++;
// }
// else if (obj[arr][j] === obj[arr][j+1]){
//     res = obj[arr][j];
//    // j++;
// }
// //console.log(obj[j]);
// }
//console.log(res);
result.push(res);
return result;
}
console.log(mostFrequentElement([1,2,5,1,3,5,2,1])); // [1]
console.log(mostFrequentElement([1,2,5,1,3,5,2,1,2])); // [1,2]
console.log(mostFrequentElement([1,2,5,1,3,5,2,1,2,3,3])); // [1,2,3]