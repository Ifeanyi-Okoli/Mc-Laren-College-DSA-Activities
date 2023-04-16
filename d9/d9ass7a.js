// / Exercise 7
// Given an array, for each element find the value of the nearest element to 
//the left which is having a frequency greater than  that of the current 
//element. If there does not exist an answer for a position, then make the 
//value as -1.

function nearestElementLeft(arr){
    let freq = [];
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let a = getOccurrence(arr, arr[i])
        freq.push(a);
        
    }
    for (let i = 0; i < freq.length, i < arr.length; i++){
        if (i = 0){
            result.push(-1);
        }
        if ((freq[i-1]) > freq[i]){
            result.push(arr[i-1])
        }
        else{
            result.push(-1);
        }
    }
    return result;
}

function getOccurrence(arr, num){
    let count = 0;
    arr.forEach((element) => (element === num && count++));
    return count;
}

let input = [6,7,8,4,2,6,0,2,4,2,1]
let Input = [8, 1, 1, 2, 2, 9, 1]
// Output: [-1, -1, -1, 1, 1, 2, -1]

let Input1 = [5, 3, 3, 9, 8, 1, 1, 2]
// Output: [-1, -1, -1, 3, 3, -1, -1, 1]

console.log(nearestElementLeft(input));
console.log(nearestElementLeft(Input));
console.log(nearestElementLeft(Input1));

/*
var arr = [2, 3, 1, 3, 4, 5, 3, 1];

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

console.log(getOccurrence(arr, 1));  // 2
console.log(getOccurrence(arr, 3));  // 3



*/