/*
The steps are as follows :

Define a stack, for keeping track of asteroids, let’s say remainingAsteroids.
Iterate through the given array/list, let’s say our current index is i.
If the ASTEROIDS[i] is positive, then we will push the current element into the stack.
If the stack is empty or the element at the top of the stack is negative then also we will push the current element into the stack. Since the asteroid at the top of the stack is negative, all the asteroids in the stack, as well as the current asteroid, would be moving to the left. Thus, the current asteroid will not collide with any other asteroid.
If ASTEROIDS[i] is negative then while the element at the top of the stack is positive and is less than the absolute value of ASTEROIDS[i] we will keep popping the top element from the stack. We do this because the current asteroid will collide with and destroy all asteroids moving to the right and having a size less than that of the current asteroid.
Now if the element at the top of the stack is equal to the absolute value of ASTEROIDS[i] then pop the element because incase of asteroids of equal size, both the asteroids will be destroyed.
Else if the stack is empty or the top element is negative, then we will push the current element into the stack.
Now all the elements present in the stack will represent the final state of the asteroids. Hence we will return all the elements of the stack.

*/

// let isAllNegative = (currentValue) => currentValue < 0;
// let isAllPositive = (currentValue) => currentValue > 0;
function asteroidCollision(arr) {
    let remainingAsteroids = [];
    // if (arr.every(isAllNegative)) return arr;
    // if (arr.every(isAllPositive)) return arr;
     for (let i = 0; i < arr.length; i++) {
       if(arr[i]> 0) remainingAsteroids.push(arr[i]);
       if(remainingAsteroids.length === 0 || remainingAsteroids[remainingAsteroids.length-1] <0) remainingAsteroids.push(arr[i]);

       if(arr[i] < 0 && remainingAsteroids[remainingAsteroids.length-1] > 0 && Math.abs(remainingAsteroids[remainingAsteroids.length-1]) < Math.abs(arr[i])) remainingAsteroids.pop(remainingAsteroids[remainingAsteroids.length-1]);


       if(remainingAsteroids[remainingAsteroids.length-1] ===  Math.abs(arr[i])) remainingAsteroids.pop(remainingAsteroids[remainingAsteroids.length-1]);
       
else if(remainingAsteroids.length === 0 || remainingAsteroids[remainingAsteroids.length-1] <0) remainingAsteroids.push(arr[i]);

    //    if (arr[i] > 0 && arr[i + 1] < 0) {
    //         if (Math.abs(arr[i]) === Math.abs(arr[i + 1])) {
    //             arr.splice(i, 2);
    //             i--;
    //         }
    //         else if (Math.abs(arr[i]) > Math.abs(arr[i + 1])) {
    //             arr.splice(i, 1);
    //             i--;
    //         }
    //         else if (Math.abs(arr[i]) < Math.abs(arr[i + 1])) {
    //             arr.splice(i, 1);
    //             i--;
    //         }

    //     }

    }

    
    return remainingAsteroids;
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
