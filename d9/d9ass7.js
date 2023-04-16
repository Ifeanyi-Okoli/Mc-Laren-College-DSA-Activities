// Exercise 7
// Given an array, for each element find the value of the nearest element to 
//the left which is having a frequency greater than as that of the current 
//element. If there does not exist an answer for a position, then make the 
//value as -1.

// Example:

function freq(arr, obj){
    arrFreq=[];
    for (let i = 0; i<arr.length; i++){
        for(key in obj){
            if (key === arr[i]){
                arrFreq.push(obj[key]);
            }
        }
    }
    console.log(arrFreq)
    return arrFreq;
}

function nearestElementLeft(arr){
    let obj = {};
    let freq=[];
    for (let i = 0; i < arr.length; i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]]++;
            freq.push(obj[arr[i]]);
        }
        else{
            obj[arr[i]] =1;
            freq.push(obj[arr[i]]);
        }
    }
    let a = freq(arr, obj);
    // console.log(obj);
    // console.log(freq);
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