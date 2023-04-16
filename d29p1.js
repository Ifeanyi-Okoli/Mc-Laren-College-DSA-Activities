// Decreasing Numbers with Target Sum
// Allowed Time: 40 mins

// Make a function that receives two arguments:

// the sum of digits value

// the desired number of digits for the numbers

// The function should output an array with all possible numbers whose digits add up to the sum provided and the digits are in decreasing order. Have a look at the example to understand better.

// Examples

function findAll(num1, num2){
    let nums = "0123456789";
    let result = [];
    let res = [];
    if(num2<4){
    for(let i = 0; i<nums.length;i++){
        for(let j = 0; j < nums.length; j++){
            for(let k = 0; k<nums.length; k++){
                if(parseInt(nums[i])+parseInt(nums[j])+parseInt(nums[k]) === num1){
                    let sum = nums[i]+nums[j]+nums[k];
                    result.push(sum);
                };
            }
        }
    }
    
    for(let i = 0; i<result.length; i++){
        if(result[i][0]>=result[i][1] && result[i][1]>=result[i][2]){
            res.push(result[i]);
        }
        
    }
    
    return res.reverse();
}
else{
    for(let i = 0; i<nums.length;i++){
        for(let j = 0; j < nums.length; j++){
            for(let k = 0; k<nums.length; k++){
                for(let l = 0; l<nums.length; l++){
                if(parseInt(nums[i])+parseInt(nums[j])+parseInt(nums[k]) +parseInt(nums[l]) === num1){
                    let sum = nums[i]+nums[j]+nums[k]+nums[l];
                    result.push(sum);
                }
            }
            }
        }
    }
    
    for(let i = 0; i<result.length; i++){
        if(result[i][0]>=result[i][1] && result[i][1]>=result[i][2]){
            res.push(result[i]);
        }
        
    }
    
    return res.reverse();
}
}

console.log(findAll(10, 3)); // should return [ 910, 820, 811, 730, 721, 640, 631, 622, 550, 541, 532, 442, 433] 


console.log(findAll(84, 4)); // []
console.log(findAll(27, 3)); // [ 999 ]

/*
if((result[i][0]>result[i][1] && (result[i][1]>result[i][2] || result[i][1] === result[i][2])) || (result[i][0] ===result[i][1] && (result[i][1]>result[i][2] || result[i][1] === result[i][2]))){
            res.push(result[i]);
        }
*/