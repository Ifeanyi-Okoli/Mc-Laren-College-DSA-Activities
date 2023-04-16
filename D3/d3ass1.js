// Exercise 1 - Socks by Match
// Given an array of integers representing the color of each sock, determine how many pairs of socks 
//with matching colors there are. For example, there are 7 socks with colors [1, 2, 1, 2, 1, 3, 2]. 
//There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Create a function that returns an integer representing the number of matching pairs of socks that 
//are available.

// Examples

function sockMerchant(arr) {
    let obj = {};
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
    }
    for (key in obj) {
        if (obj[key] >= 2) {
            count = count + Math.floor(obj[key] / 2);
        }
    }
    return count;
}
console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); // should return 3

console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90])); // should return 4

console.log(sockMerchant([])); // should return 0