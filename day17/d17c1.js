//Tasks
// Create a nums array and store the numbers 4,5,6 into it.
// Using 3 unshift operations store the numbers 1,2 & 3 into the array and print the array. 
//The array should now look like
// [1,2,3,4,5,6]
// Create a nums2 array and store the numbers 4,5,6 into it.
// Store the numbers 1,2 and & 3 into the array using a single unshift opeartion.The array should now look like
// [1,2,3,4,5,6]

let nums = [];
nums.push(4, 5, 6);
console.log(nums);
nums.unshift(3);
nums.unshift(2);
nums.unshift(1);
console.log(nums);

let nums2 = [];
nums2.push(4,5, 6);
nums2.unshift(1, 2, 3);
console.log(nums2);