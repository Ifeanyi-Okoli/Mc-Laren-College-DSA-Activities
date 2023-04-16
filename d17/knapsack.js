// Given weights and values of n items, put these items in a knapsack/Bag of capacity W 
//to get the maximum total value in the knapsack. In other words, given two integer 
//arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with 
//n items respectively. Also given an integer W which represents knapsack/bag capacity, 
//find out the maximum value subset of val[] such that sum of the weights of this subset 
//is smaller than or equal to W. You cannot break an item, either pick the complete item 
//or don’t pick it (0-1 property).

// Example:
// function maximum(a, b){
//     return (a>b) ? a : b;
// }

function knapSack(weights = [], values = [], bagWeight = 0, n=0){
    if(bagWeight ===0) {
        return 0;
    }
    if(n === weights.length) {
        return 0;
    }
    if(weights[n] <= bagWeight){
         let pickWeight = values[n] + knapSack(weights, values, bagWeight - weights[n], n+1);
         let notPickWeight = knapSack(weights, values, bagWeight, n+1);
         return Math.max(pickWeight, notPickWeight);
    }
    else{
        return knapSack(weights, values, bagWeight, n+1);
    }
}

// Input:
let weights = [10, 2, 8, 5];
let values = [10, 12, 8, 7];
let bagWeight = 13;
let n = weights.length;

// Output:
// 22
// Note: Just try doing using recursion.

console.log(knapSack(weights, values, bagWeight))

// const value1 = [12, 2, 1, 4, 1];
// const weight1 = [4, 2, 1, 10, 2];
// const bagWeight1 = 15;
// Output: 17


// const value2 = [12, 2, 1, 4, 1];
// const weight2 = [4, 2, 1, 10, 2];
// const bagWeight2 = 15;
// Output: 39


// const value3 = [2, 2, 2, 2, 100]
// const weight3 = [1, 1, 1, 1, 4]
// const bagWeight3 = 4

// console.log(sackCapacity(weigth, value, bagWeigth, n))
// console.log(sackCapacity(weigth, value, bagWeigth, n))
// console.log(sackCapacity(weigth, value, bagWeigth, n))


//