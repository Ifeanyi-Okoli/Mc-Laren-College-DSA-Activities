//Exercise 2 - Larger than All Numbers to Their Right
// Create a function that retrieves every number that is strictly larger than every number that 
//follows it.

// Examples

function largerThanRight(arr){
let result = [];
let j = 0;
while(j <arr.length){
    loop1:
    for(let i = j+1; i < arr.length; i++){
        if(arr[j] <= arr[i]){
            j++;
            break loop1;
        }
        
    }
    result.push(arr[j]);
    j++;
}
j=0;
let result1 = [];
while(j <result.length){
    loop1:
    for(let i = j+1; i < result.length; i++){
        if(result[j] <= result[i]){
            j++;
            break loop1;
        }
        
    }
    result1.push(result[j]);
    j++;
}

j=0;
let result2 = [];
while(j <result1.length){
    loop1:
    for(let i = j+1; i < result1.length; i++){
        if(result1[j] <= result1[i]){
            j++;
            break loop1;
        }
        
    }
    result2.push(result1[j]);
    j++;
}

return result2;
}

console.log(largerThanRight([3, 13, 11, 2, 1, 9, 5])); //➞ [13, 11, 9, 5]
// 13 is larger than all numbers to its right, etc.

console.log(largerThanRight([5, 5, 5, 5, 5, 5])); //➞ [5]
// Must be strictly larger.
// Always include the last number.

console.log(largerThanRight([5, 9, 8, 7])); //➞ [9, 8, 7]