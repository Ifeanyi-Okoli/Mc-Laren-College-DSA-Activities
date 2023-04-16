// Visible Persons
// Allowed Time: 45 mins

// There are n persons standing in a queue, and they numbered from 0 to n - 1 in left to right order.

// You are given an array heights of distinct integers where heights[i] represents the height of the ith person.

// A person can see another person in the queue if everybody in between is either shorter than or equal to both of them.

// Write a function visiblePersons which takes in the heights array and returns an array answer of length n where answer[i] is the number of persons the ith person can see in the queue.

// Example 1
// Input: heights = [10, 6, 8, 5,10,11]
// Output: [4, 2, 4, 2, 4, 2]
// Explanation:
// Person 0 can see person 1, 2, 4 and 5.
// Person 1 can see person 0 and 2.
// Person 2 can see person 0, 1, 3 and 4.
// Person 3 can see person 2 and 4.
// Person 4 can see person 3, 2 , 0 and 5.
// Person 5 can see person 0 and 4
// Example 2
// Input: heights = [5, 1 ,2, 3, 10]
// Output: [4, 2, 3, 3, 2]
// Explanation:
// Person 0 can see person 1, 2, 3 and 4.
// Person 1 can see person 0 and 2.
// Person 2 can see person 0, 1 and 3.
// Person 3 can see person 2 ,5 and 4.
// Person 4 can see person 3 and 5.

function heightCheck(current, heights, index) {
    let count = 0;
    let count1 = 0;
    let arr = JSON.parse(JSON.stringify(heights));
    for (let i = index + 1; i < arr.length; i++) {
        let curr = arr[i];
        // queue.push(curr);
        if (current >= curr && curr >= arr[i+1]) {
            count++;
            arr.splice(i, 1);
            // console.log(arr)
            i--;
        }
    }
    arr = JSON.parse(JSON.stringify(heights));
    for (let i = index - 1; i >= 0; i--) {
        let curr = arr[i];
        if (current >= curr) {
            count1++;
            arr.splice(i, 1);
            // console.log(arr)
            i--;
        }
    }
    return count + count1;
}


function visiblePersons(heights) {
    let visibleCount = [];
    for (let i = 0; i < heights.length; i++) {
        let current = heights[i];
        visibleCount.push(heightCheck(current, heights, i));
    }
    return visibleCount;
}
console.log(visiblePersons([10, 6, 8, 5, 10, 11]));// [4, 2, 4, 2, 4, 2]
console.log(visiblePersons([5, 1, 2, 3, 10]));// [4, 2, 3, 3, 2]