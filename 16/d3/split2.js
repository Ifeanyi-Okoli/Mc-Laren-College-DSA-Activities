// Split Array With Equal Sum
// Allowed Time: 50 mins

// Given an array of numbers check if the array can be split into two subarrays each having an equal sum of elements. You have to use all the elements to make the subarrays and the order of numbers can be changed.

// Examples
// [3, 6, 5, 1, 3] can be split into [3, 6] & [5, 1, 3] each having the sum equal to 9
// [3, 7, 5, 1, 3, 1, 1, 1] can be split into [3, 7, 1] and [5, 3, 1, 1, 1] each having the sum equal to 11
// [3,7,8,5] cannot be split into two subarrays having the same sum
function canSplitArray(nums){
    // write your code here
    if(nums.length=== 1) return;
    let sum1=[];
    let sum2=[];
    let tempArr= JSON.parse(JSON.stringify(nums));
    let tempArr2 = JSON.parse(JSON.stringify(nums));
    let max1= Math.max(...tempArr);
    tempArr.splice(tempArr.indexOf(max1),1);
    sum1.push(max1);
    nums.splice(nums.indexOf(max1),1);
    max2= Math.max(...tempArr);
    tempArr2.splice(tempArr.indexOf(max2),1);
    sum2.push(max2);
    let diff = max1 -max2;
    if(nums.includes(diff)){
        tempArr2.splice(tempArr.indexOf(diff),1);
        let total = tempArr2.reduce((prev, curr)=>prev+curr,0);
        let total2 = nums.reduce((prev, curr)=>prev+curr,0);
        if(total === total2){
            return true
        }
    }   
    
   
       
    }
   
   
   console.log(canSplitArray([3,6,5,1,3]));// true 
//    console.log(canSplitArray([3,1,1,3]));// true 
//    console.log(canSplitArray([3,7,5,1,3,1,1,1]));// true 
//    console.log(canSplitArray([3,7,8,5]));// false