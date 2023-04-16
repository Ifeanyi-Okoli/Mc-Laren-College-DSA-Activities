// Example 1
// Input: 

let isAllNegative = (currentValue) => currentValue < 0;
let isAllPositive = (currentValue) => currentValue > 0;
function asteroidCollision(arr) {
    if (arr.every(isAllNegative)) return arr;
    if (arr.every(isAllPositive)) return arr;
     for (let i = 0; i < arr.length; i++) {
        // let d = Math.round((arr.length - 1) / 2);
        if (arr[i] > 0 && arr[i + 1] < 0) {
            if (Math.abs(arr[i]) === Math.abs(arr[i + 1])) {
                arr.splice(i, 2);
                i--;
            }
            else if (Math.abs(arr[i]) > Math.abs(arr[i + 1])) {
                arr.splice(i, 1);
                i--;
            }
            else if (Math.abs(arr[i]) < Math.abs(arr[i + 1])) {
                arr.splice(i, 1);
                i--;
            }

        }

    }

    
    return arr;
}


// asteroids = [5, 10, -5]
// // Output: [5, 10]
// // Explanation: 
// // The 10 and -5 collide resulting in 10.  The 5 and 10 never collide. 

// // Example 2:
// // Input: 
// asteroids = [8, -8]
// // Output: []
// // Explanation: 
// // The 8 and -8 collide exploding each other.

// // Example 3:
// // Input: 
// asteroids = [10, 2, -5]
// Output: [10]
// Explanation: 
// The 2 and -5 collide resulting in -5.  The 10 and -5 collide resulting in 10.

// Some edge cases:
console.log(asteroidCollision([-2, -1, 1, 2])); // [-2,-1,1,2]
console.log(asteroidCollision([-2, -2, -2, -2])); // [-2, -2, -2, -2]
console.log(asteroidCollision([-2, 1, 1, -2])); // [-2, -2]
console.log(asteroidCollision([-1, 1, 1, -2])); // [-1,-2]
console.log(asteroidCollision([5, 10, -5])); //([5, 10]));
console.log(asteroidCollision([8, -8])); //([]));
console.log(asteroidCollision([10, 2, -5])); //([10]));


// Notes
// The length of asteroids will be at most 10000.
// Each asteroid will be a non-zero integer in the range [-1000, 1000]..