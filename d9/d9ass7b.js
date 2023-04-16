// / Exercise 7
// Given an array, for each element find the value of the nearest element to 
//the left which is having a frequency greater than  that of the current 
//element. If there does not exist an answer for a position, then make the 
//value as -1.


function checkFreq(arrf,arr, num, m){
    console.log(num);
    for (let i = m; i < arrf.length; i++){
        if(i === 0){
            return -1;
        }
        while(i > 0){
            if(arrf[i-1] > num){
                return arr[i-1];
            }            
            i--;
        }        
    }
    return -1;
}

function nearestElementLeft(arr) {
    let freq = [];
    let result = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }


        
    }
    // console.log(obj);
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        
        for (let key in obj) {
            // console.log(key);
            if (+(key) === a) {
                freq.push(obj[key]);
            }
        }

    }
    for(let i =0; i < freq.length; i++){
        // console.log(freq[i]);
        let b = checkFreq(freq,arr, freq[i], i);
        result.push(b);
    }
    
    return result;
}

let input = [6, 7, 8, 4, 2, 6, 0, 2, 4, 2, 1]
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