// Level of Precipitation
// Allowed Time: 40mins

// Your local meteorologist has a rain gauage that measure the levels of precipitation. These levels are represented as integers in units of millimeters(mm). You can take this as an array of positive integers, with each value representing the level of precipitation at a certain day.

// Your task is to find the periods in which the levels fall with a value of 1 for each consecutive day. A period consists of a number of consecutive days in which the level of percepitation falls by exactly 1 each day compared to the previous day. Return the number of such periods if there are any. Return 0 if there are no such periods.

// Example 1: Levels: 

function precipitationLevel(arr){
let count = 0;
for(let i = 1; i < arr.length; i++){
    if(arr[i-1] - arr[i] === 1){
        count++;
    }
    if(arr[i-1] - arr[i] === 1 && arr[i] - arr[i+1] === 1){
        count++;
    }
}
return count;
}

let arr = [3,2,1,4] 
// => 3


// Example 2: Levels: 
let arr1 = [4, 3, 2, 5, 4, 6] 
// => 4


// Example 3: Levels: 
let arr2 = [8,6,7,7] 
// => 0


let arr3 = [10, 8, 6, 7, 6, 5]//(3); 

// There is no period where level of precipitation falls by 1

console.log(precipitationLevel(arr));
console.log(precipitationLevel(arr1));
console.log(precipitationLevel(arr2));
console.log(precipitationLevel(arr3));