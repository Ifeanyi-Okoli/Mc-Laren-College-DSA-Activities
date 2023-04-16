// Part 1: Implement bubble sort algorithm to sort an array of numbers in ascending order.

function bubbleSortNums(nums) {
    let j = 5;
    while (j > 0) {
        for (let i = 1; i < nums.length; i++) {
            let temp;
            if (nums[i - 1] > nums[i]) {
                temp = nums[i];
                nums[i] = nums[i - 1];
                nums[i - 1] = temp;
            }
        }
        j--;
    }

    return nums;
}

console.log(bubbleSortNums([1, 100, 2, 12, 6, 7]));
// Note: You can refer to this gist to understand bubble sort algorithm and visualizations.

// Part 2: Looking at the existing bubble sort, write bubbleSortObj to sort an array of objects based on age in ascending order.

function bubbleSortObj(arr) {
    let j = 4;
    while (j > 0) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1].age > arr[i].age) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
            }
        }
        j--;
    }

    return arr;
}

console.log(bubbleSortObj([
    { name: 'Vivek', age: 25, },
    { name: 'John', age: 34 },
    { name: 'Krish', age: 19 },
    { name: 'Akash', age: 56 }
])); 