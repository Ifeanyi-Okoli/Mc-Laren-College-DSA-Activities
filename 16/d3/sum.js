// Find Factors and Sum
// Allowed Time: 30 mins

// Write a function findFactorsAndSum which takes an array num and returns a sorted multidimensional array where each element contains the prime factor l and sum of all nums[j] for which that l is a factor. Look at example for better understanding

// The result array will be sorted in increasing order of prime numbers.

// Examples
// Example 1:

function findFactorsAndSum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let primeArr = [];
        let k = arr[i]-1;
        // console.log(arr[i])
        while (k >1) {
            if (arr[i] % k === 0) {
                // console.log(arr[i])
                primeArr.push(k);
                result.push(primeArr);
            }
            k--;
           
        }
        // console.log
    }
    let result1=[]
    result1.push[2];
    for(let i = 0; i < result.length; i++){
        for(let j = 0; j < result[i].length; j++){
            
            if(result[i][j] === 2 || result[i][j]%2!==0){
                result1.push(result[i][j])
            }
        }
    }
    let uniqueArray=[];
    for(i=0; i < result1.length; i++){
        if(uniqueArray.indexOf(result1[i]) === -1) {
            uniqueArray.push(result1[i]);
        }
    }
    let finalArr=[];
    for(let i = 0; i < uniqueArray.length; i++){
        for(let j = 0; j<arr.length;j++){
            if(arr[j]%uniqueArray[i]===0){
                finalArr.push([uniqueArray[i], arr[j]])
            }
        }
    }
    return finalArr;
}


console.log(findFactorsAndSum([12, 15])); // should return [[2, 12], [3, 27], [5, 15]]`.
// Explanation: [2, 3, 5] are the prime factors of all the elements of input array.
// 2 is factor of 12, so we get [2, 12]
// 3 is factor of 12 and 15, so we get [3, 27]
// 5 is factor of only 15, so we get [5, 15]
// Example 2:

console.log(findFactorsAndSum([12, 14, 15, 18])); // should return [[ 2, 44 ], [ 3, 45 ], [ 5, 15 ], [ 7, 14 ]]
// Explanation: [2, 3, 5, 7] are the prime factors of all the elements of input array.
// 2 is factor of 12, 14, and 18, so we get [2, 12 + 14 + 18] which is [2, 44]
// 3 is factor of 12, 15 and 18, so we get [3, 12 + 15 + 18] which is [3, 45]
// 5 is factor of 15 so we get [5, 15]
// 7 is factor of 14, so we get [7, 14]