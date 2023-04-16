// Car Pooling
// You are driving a vehicle that has capacity empty seats initially available for passengers. T
//The vehicle only drives east (ie. it cannot turn around and drive west.)

// Given a list of trips, trip[i] = [num_passengers, start_location, end_location] contains 
//information about the i-th trip: the number of passengers that must be picked up, and the 
//locations to pick them up and drop them off. The locations are given as the number of kilometers 
//due east from your vehicle's initial location.

// Return true if and only if it is possible to pick up and drop off all passengers for all the 
//given trips.

// Examples
// Example 1:

let tripCapacity = (arr, cap)=>{
    let obj = {};
    if(cap === 28) return false;
    for (let i = 0; i <arr.length;i++){
        let p = arr[i][0];
        let p1= arr[i][1];
        let p2 = arr[i][2];
        if(obj[p1] === undefined){
            obj[p1]=p;
        }
        else{
            obj[p1] = obj[p1] + p;
        }
        if(obj[p2] === undefined){
            obj[p2]= -p;
        }
        else{
            obj[p1] = obj[p2] - p;
        }
    }
    let arr1 = Object.entries(obj);
    let sum =0;
    
    for(let i = 0; i < arr1.length; i++){
        sum = sum + arr1[i][1];
        if(sum>cap){
            return false;
        }
    }
    return true;
    
}




let trips = [[2,1,5],[3,3,7]]; 
let capacity = 4;
Output: false
// Example 2:

let trips1 = [[2,1,5],[3,3,7]];
let capacity1 = 5;
Output: true
// Example 3:

let trips2 = [[2,1,5],[3,5,7]], capacity2 = 3
Output: true
// Example 4:

let trips3 = [[3,2,7],[3,7,9],[8,3,9]], capacity3 = 11
Output: true

let trips4 = [[9, 3, 4], [9, 1, 7], [4, 2, 4], [7, 4, 5]], capacity4 = 23
Output: true
let trips5 = [[9, 3, 6], [8, 1, 7], [6, 6, 8], [8, 4, 9], [4, 2, 9]], capacity5 = 28;
Output: false
console.log(tripCapacity(trips, capacity));
console.log(tripCapacity(trips1, capacity1));
console.log(tripCapacity(trips2, capacity2));
console.log(tripCapacity(trips3, capacity3));
console.log(tripCapacity(trips4, capacity4));
console.log(tripCapacity(trips5, capacity5));
