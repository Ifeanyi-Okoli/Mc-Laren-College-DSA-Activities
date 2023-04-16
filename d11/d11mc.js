// Morning Challenge
// Note - You will be writing solutions to this exercise in main.js file

// Exercise 1
// Consider you are given a list of numbers in a descending order.

// Eg - [10, 6, 5, 2, 2, 1]

// Assume that these numbers are plotted in a bar graph in the following manner, such that 
//it's bounded on both sides:

// |                       |
// |                       |
// |                       |
// |                       |
// |                       |
// |                       |
// |____                   |
// |   |                   |
// |   |                   |
// |   |                   |
// |   |____               |
// |   |   |____           |
// |   |   |   |           |
// |   |   |   |           |
// |   |   |   |________   |
// |   |   |   |   |   |___|
// |10 | 6 | 5 | 2 | 2 | 1 |
// Observe that the graph looks like a container. If we assume the width of each bar is 1 unit,
// and you are provided with X 1x1 units of water, what would be the height to which the 
//water fills the container?

// Examples:

function waterFiller(space, water) {
    if (water > space) {
        let remainingWater = water - space;
        return remainingWater;
    }


}

function getWaterLevel(numbers, totalWater) {
    let units = 1;
    let w = 0;
    for (let i = numbers.length - 1; i > 0; i++) {
        w++;
        if (totalWater > 0) {
            let a = numbers[i - 1];
            let b = numbers[i];
            console.log(a);
            h = (a - b);
            filler = w * h;
            units = units + h;
            totalWater = waterFiller(filler, totalWater, w, h);


        }
    }
    return h;
}

// let totalWater = 
let numbers = [10, 6, 5, 2, 2, 1];

console.log(getWaterLevel(numbers, 10));
// If X is 1, water rises to 2 units
// If X is 4, water rises to 3 units
// If X is 7, water rises to 4 units
// If X is 10, water rises to 5 units
// If X is 12, water rises to 5.5 units
// Implement a function getWaterLevel(numbers, totalWater) which returns the level of the 
// water