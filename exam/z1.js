// Leader In An Array
// Create a function that finds each number in the given array that is greater than every 
//number that comes after it. Your solution should return an array of the number(s) that meet 
//these criteria.
//Instructor feedback;

// "1 For checking the leader you need to create a loop that iterates through all the elements 
//in the array.

// Each time you run the loop you can call a helper function that checks if all the elements 
//after the index are smaller.

// The helper function will return true or false depending on whether all the elements are 
//smaller.

function max(nums, numsi, i) {
    //let maxi= 0;
    for (let j = 0 + i; j < nums.length; j++) {
        if (numsi < nums[j]) {
            return false;
        }
    }
    return true;
}

function leader(nums) {
    let res = [];
    let a = 0;
    for (let i = 0; i < nums.length; i++) {
        if (max(nums, nums[i], i)) {
            res.push(nums[i]);
        }
    }
    return res;
}
console.log(leader([2, 3, 20, 15, 8, 3]));// ➞ [20, 15, 8, 3]
// Note that 20 is greater than all the elements to it's
// right side, similarly 15 and so on.

console.log(leader([2, 3, 20, 15, 8, 25, 3]));// ➞ [25, 3]
// Note that 20 cannot be added because it is not greater than 25.

console.log(leader([1, 2, 3, 4, 5]));// ➞ [5]
// 5 is technically greater than the (zero) remaining items.

console.log(leader([8, 7, 1, 2, 10, 3, 5]));// ➞[10, 5]
// 10 is greater than all items to the right of it, so include.
// 3 is not greater than all items to the right of it, so exclude.
// 5 is greater than the remaining items, so include.

// Notes
// Add elements in the new array in the same order they occur in the input array.