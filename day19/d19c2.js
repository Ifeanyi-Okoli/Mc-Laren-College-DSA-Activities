let nums = {
    even: [2, 4, 6],
    odd: {
        prime: [3, 5, 7],
        composite: [9, 15]
    }
}

//1. create a deep copy of the nums object and name it nums2
let nums2 = {};
nums2["even"] = [];
nums2["odd"] = {};
nums2["odd"]["prime"] = [];
nums2["odd"]["composite"] = [];
let arr1 = nums["even"];
let copyarr1 = nums2["even"];
for (let i = 0; i < arr1.length; i++) {
    copyarr1.push(arr1[i]);
}
//console.log(nums2);
let arr2 = nums["odd"]["prime"];
let copyArr2 = nums2["odd"]["prime"];
for (let i = 0; i < arr2.length; i++) {
    copyArr2.push(arr2[i]);
}
//console.log(nums2);
let arr3 = nums["odd"]["composite"];
let copyArr3 = nums2["odd"]["composite"];
for (let i = 0; i < arr3.length; i++) {
    copyArr3.push(arr3[i]);
}
console.log(nums2);

// 2. Add 8 to the even array in the nums object.
arr1.push(8);
//console.log(nums);

// 3. Add 11 to the prime array in the nums object.
arr2.push(11);
//console.log(nums);
// 4. Print the two objects nums and nums2. The changes made in the nums object must not
//be reflected in the nums2 object.
console.log(nums);
console.log(nums2);