/*A symmetrical worm of size N can be defined as a sequence of numbers having a central digit 
and every nth left and right digits to the central digit are equal to each other.

Your task is to find the number of symmetrical worms of the given size in an array.

Here are some examples of symmetrical worms

Size 3: [2,1,2]

Size 5: [8,-5,1,-5,8]

Size 7: [-2,-1, 5, 0, 5,-1,-2]

So all symmetrical worms will have sizes like 3,5,7 .. etc which will be odd numbers greater 
than 1.

Here is a diagram with an example for illustration.
Your function should accept 2 parameters, an array, and a worm size and should return the number of symmetrical worms of that size present in the array.

Foreg.
*/

function numberOfSymmetricalWorms(arr, size) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let ind1 = i;
        let ind2 = i + size -1
        for (let j =0; j < size/2; j++){
            if(arr[ind1 + j] === arr[ind2 -j]){
                count++;
            }
        }
        // if (arr[i - 1] === arr[i + 1]) {
        //     count++
        // }
    }
    return count;
}
console.log(numberOfSymmetricalWorms([5, 1, 5, 1, 5], 3))// should return 3. Worms are [5,1,5],[1,5,1],[5,1,5]
console.log(numberOfSymmetricalWorms([5, 1, 7, 1, 5], 5))// should return 1. Worms are [5,1,7,1,5]
console.log(numberOfSymmetricalWorms([5, 1, -7, 1, 5], 3))// should return 1. Worms are [1,-7,1]
console.log(numberOfSymmetricalWorms([5, 1, -7, 3, 5], 3))// should return 0. No worms of given size
console.log(numberOfSymmetricalWorms([5, -3, 2, 1, 5, 1, 2, -3, 5, 9, 5, -3, 2, 1], 9))// should return 2. Worms are [5,-3,2,1,5,1,2,-3,5],[1,2,-3,5,9,5,-3,2,1]
console.log(numberOfSymmetricalWorms([5, -3, 2, 1, 5, 1, 2, -3, 6, 9, 5, -3, 2, 1], 7))// should return 1. Worms are [-3,2,1,5,1,2,-3]