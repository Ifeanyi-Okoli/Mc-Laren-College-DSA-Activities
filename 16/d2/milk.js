// Milk Delivery
// Allowed Time: 45 mins

// You want to deliver milk bottles in a row of houses with a milk crate. The houses are arranged in a row and are labeled from 0 to n - 1 from left to right where the ith house is located at x = i. The milk van is parked at x = -1 that you can refill your milk crate at.

// Each house needs a specific number of milk bottles.

// You will deliver the milk bottles in the following way:

// Deliver the milk bottles in order from left to right.
// Every time you deliver the bottles you go to the next house to check if you can deliver there.
// If your crate becomes empty at the current house you dont go to the next house but return to the van.
// If you do not have enough milk bottles to deliver the current house, return to the van to fully refill the milk crate.
// You cannot fulfill the requirements partially, i.e. if house needs 3 bottles you cannot deliver just 1 bottle.
// You are initially at the milk van (i.e., x = -1). It takes one step to move one unit on the x-axis.
// Write a function called milkDeliverySteps which takes in a 0-indexed integer array houses of n integers, where houses[i] is the amount of milk bottles the ith house needs, and an integer capacity representing the milkcrate capacity, return the number of steps needed to deliver all the milk bottles.

// Examples
// Example 1:

// Input: houses = [2,2,3,3], milkCrateCapacity = 5
// Output: 18
// Explanation: Start at the milk van with a full milk crate:
// - Walk to house 0 (1 step) and deliver 2 milk bottles. Milk crate now has 3 bottles after delivery. (Total Steps = 1)
// - Walk to house 1 (1 step) and deliver 2 milk bottles. Milk crate now has 1 bottle after delivery.  (Total Steps = 2)
// - Walk to house 2 (1 step). House 2 requires 3 milk bottles, Milk crate has just 1 so you cannot deliver. (Total Steps = 3)
//  - Since you cannot completely deliver house 2, walk back to the milk van to refill (3 steps). (Total Steps = 6)
// - Walk to house 2 (3 steps) and deliver the milk bottles. Milk crate now has 2 bottles after delivery.(Total Steps = 9)
// - Walk to house 3 (1 step). House 3 requires 3 milk bottles, Milk crate has just 2 so you cannot deliver. (Total Steps = 10)
// - Since you cannot completely deliver house 3, walk back to the milk van to refill (4 steps). (Total Steps = 14)
// - Walk to house 3 (4 steps) and deliver it.(Total Steps = 18)

// Example 2:

// Input: houses = [1,1,1,4,2,3], milkCrateCapacity = 4
// Output: 34
// Explanation: Start at the milk van with a full milk crate:
// - Deliver houses 0, 1, and 2 (3 steps).(Total Steps = 3)
// - Walk to house 3 ,it requires 4 bottles so we cannot deliver (Total Steps = 4)
// - Go back to the van ((Total Steps = 8)
// - Deliver house 3 (4 steps).(Total Steps = 12)
// - We have 0 milk bottles so we dont check house 4 and go back to the van (Total Steps = 16)
// - Deliver house 4 (5 steps). (Total Steps = 21)
// - Walk to house 5 ,it requires 3 bottles so we cannot deliver (Total Steps = 22)
// - Go back to the van (Total Steps = 28)
// - Deliver house 5 (6 steps). (Total Steps = 34)

// Example 3:

// Input: houses = [7,7,7,7,7,7,7], milkCrateCapacity = 8
// Output: 61

function stepsToDeliver(houses, milkCrateCapacity) {
    // write your code here
    //set count to zero
    let stepsCount = 0;
    let count = 0;
    //set temp to crate capacity
    let temp = milkCrateCapacity;
    //iterate through the houses array
    for (let i = 0; i < houses.length; i++) {
        let currentQty = houses[i];
        if (temp >= currentQty) {
            temp -= currentQty;
            stepsCount++;
            count++;
            if (temp === 0) {
                temp = milkCrateCapacity;
                stepsCount = stepsCount -1+ i * 3;
            }
        }
        else if (temp < currentQty) {
            // console.log(temp)
            temp = milkCrateCapacity;
            count++;
            stepsCount = stepsCount -1 + i * 3;            
            i--;
        }

    }

    return stepsCount;
}
console.log(stepsToDeliver([2, 2, 3, 3], 5)); // 18
console.log(stepsToDeliver([1, 1, 1, 4, 2, 3], 4)); // 34
console.log(stepsToDeliver([7, 7, 7, 7, 7, 7, 7], 8)); // 61