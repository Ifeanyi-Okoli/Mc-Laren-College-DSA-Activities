// Exercise 2 - Delete Occurrences of Extra Elements in an Array
// Create a function that takes two arguments: an array arr and a number num.
//If an element occurs in arr more than num times, remove the extra 
//occurrence(s) and return the result.

// Examples

function check(a, arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === a){
            count++;
        }
    }
    // console.log(count);
    return count;
}


function deleteOccurrences(arr, num){
    for (let i = 0; i < arr.length; i++){
        if(check(arr[i], arr) > num){
            let a = check(arr[i], arr) - num;
            for(let k = arr.length-1; k>0; k--){
                if (a>0){
                    if(arr[k] === arr[i]){
                        arr.splice(arr[k]);                        
                    }
                    a--;
                }
            }
        }
    }
    return arr;
}

console.log(deleteOccurrences([1, 1, 1, 1], 2)); //➞ [1, 1]

console.log(deleteOccurrences([13, true, 13, null], 1)); //➞ [13, true, null]

console.log(deleteOccurrences([true, true, true], 3)); //➞ [true, true, true]
// Note:
// Do not alter the order of the original array.