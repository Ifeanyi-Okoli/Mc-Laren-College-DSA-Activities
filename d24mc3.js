// Flights Itinerary
// Allowed Time:40 mins

// Challenge
// Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return undefined. All flights must be used in the itinerary.

// For example, given the list of flights 

function itinerary(arr, start){
    let result = [];
    let d;
    for (let i = 0; i < arr.length; i++){
        if(arr[i].find(element => element === start) !== undefined){
            result.push(arr[i]);
            d = arr[i][1];
            arr.splice(i,1);
        }
        if(arr[i].find(element => element === d) !== undefined){
            result.push(arr[i]);
            d = arr[i][1];
        }        
    }
    return result
}

let arr = [['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']];
let start=  'YUL';//, you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

// Given the list of flights 
let arr1 = [['SFO', 'COM'], ['COM', 'YYZ']]; 
let start1 = 'COM';  //     ,  you should return undefined.

let arr2 = [['A', 'E'], ['B', 'C'], ['C', 'D'], ['D', 'A'], ['A', 'B']]
let startPoint = 'A';

console.log(itinerary(arr, start));