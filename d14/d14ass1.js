//Exercise 1 - Beggars Take Home
// Given an array of values and a count of beggars, you are supposed to return an 
// array with the sum of what each beggar brings home, assuming they all take 
//regular turns, from the first 
//to the last.

// Examples

function beggars(arr, num) {
    // console.log(num);
    let sum;
    let sum2 = 0;
    let res = [];
    let count = 0
    while (count < num) {
        // if (count<num){
        sum = 0;
        for (let i = count; i < arr.length; i+=num) {
            
            sum += arr[i];
            // num++;
        }
        res.push(sum);
        count++;
    }

    return res;
}

console.log(beggars([1, 2, 3, 4, 5], 2));
// For 2 beggars this will return a result of `[9,6]`, as the first one takes `[1,3,5]`, the second collects `[2,4]`.

console.log(beggars([1,2,3,4,5], 3));
// The same array with 3 beggars would have in turn have produced a better out come for the
//second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].
// Also note that not all beggars have to take the same amount of "offers",
//meaning that the length of the array is not necessarily a multiple of n;
//length can be even shorter, in which case the last beggars will of course take
//nothing (0).