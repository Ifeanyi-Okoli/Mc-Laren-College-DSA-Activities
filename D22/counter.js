// Check-in counter queue
// An airport has multiple check-in counters, with a single queue where people await their turn to check-in and deposit their baggage. Different people take different amounts of time, and once it's their turn, they go to whichever counter is available earliest. Write a function called checkin which takes an array representing the amount of time each passenger takes to check-in and deposit their baggage and no of counters that are available at the Airport, return the total time required for all passengers to complete their check-in.

// Examples

function checkin(arr, num){
    if(num===1) return arr.reduce((prev, curr)=>prev+curr,0);
    else{
        let counter1;
        let counter2;
        for(let i = 0; i<arr.length; i++){
            counter1= arr[0];
            counter2 = arr[1];
            if(counter2>counter1) counter1 = counter1+arr[2];
            else{
                counter2 = counter2+arr[2]
            } 
            if(counter2>counter1 && arr.length>3) counter1 = counter1+arr[3];
            else if(counter2<counter1 && arr.length>3){
                counter2 =counter2+arr[3]
            } 
        }
        return counter1 > counter2 ? counter1: counter2;
    }
    
}

let input =  [5,3,4];
console.log(checkin(input, 1));
// Input list here means there are 3 passengers where passenger 1 takes 5 hours to check-in, passenger 2 takes 3 hours and passenger 3 takes 4 hours and the second input means number of counters that are available is 1.
// Output
// 12 // since there is just one counter available all passengers will be served on that counter so the total time to serve will be 12 hours.
let input1 = [10,3,3,2];
console.log(checkin(input1, 2));
// Output
// 10
// Input:
console.log(checkin([2, 3, 10], 2));
// [2, 3, 10], 2
// Output
// 12