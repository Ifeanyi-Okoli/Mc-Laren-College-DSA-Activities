//The two oldest ages function/method needs to be completed. It should take an array of numbers as 
//its argument and return the two highest numbers within the array. The returned value should be 
//an array in the format [second oldest age, oldest age].
// The order of the numbers passed in could be any order. The array will always include at least 
//2 items. If there are two or more oldest age, then return both of them in array format.
// For example:
// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

function twoOldestAges(ages){
let max = -Infinity;
let max2 = -Infinity;
let res = [];
for (let i = 0; i < ages.length; i++){
    if (ages[i] > max){
        max = ages[i];
    }
}
// console.log(ages.indexOf(max, 0))
for (let j = 0; j < ages.length; j++){
    if(j !== ages.indexOf(max, 0)){
        if (ages[j] > max2 && ages[j] <= max){
            max2 = ages[j];
        }
    }
    
}
 res.push(max2);    
 res.push(max);
console.log(res);
}


let results1 = twoOldestAges([1,5,87,45,8,87]);
let results2 = twoOldestAges([6,5,83,5,3,18]);

// console.log(results1[0]);//, 45, 'Passed values of [1,5,87,45,8,8] should return [45, 87]'
// console.log(results1[1]);//,87, 'Passed values of [1,5,87,45,8,8] should return [45, 87]'

// console.log(results2[0]);//, 18, 'Passed values of [6,5,83,5,3,18] should return [18, 83]'
// console.log(results2[1]);//, 83, 'Passed values of [6,5,83,5,3,18] should return [18, 83]'