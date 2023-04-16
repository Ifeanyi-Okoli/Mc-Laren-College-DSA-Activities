// Largest Sum of Products
// Allowed Time: 58 minutes

// We partition a row of numbers A into exactly K adjacent (non-empty) groups, then our score is the sum of the products of each group.

// What is the largest score we can achieve?

// Note
// Partition must use every number in A. The numbers in each group must be adjacent in A

// Example:
    // Input: 

    function products(arr, num, start) {
        let prods = [];
        let prod = 1;
        if(start === 3) return;
        while(start)
        arr1 = arr.slice(start, num);
        // console.log(arr1);
        for (let i = 0; i < arr1.length; i++) {
            prod = prod * arr1[i];
        }
        
        prods.push(prod);
        products(arr, num, start+1)
        return prods;
    }
    



function largestSumOfProducts(arr, num, start) {
    let sum = 0;
    let prod = 1;
    let res = [];
    if(start === arr.length -3) return;
    arr1 = arr.slice(start, num);
    console.log(arr1);
    for (let i = 0; i < arr1.length; i++) {
        prod = prod * arr1[i];
    }
    for (let i = num; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    sum = sum + prod;
    res.push(sum);
    largestSumOfProducts(arr, num, start++)
    return sum;
}

let A = [9, 1, 2, 3, 9];
let K = 3;
let start = 0;
console.log(products(A, K, start));
    console.log(largestSumOfProducts(A, K, start));
    // Output: 64
    // Explanation: 
    // The best choice is to partition A into [9], [1], [2, 3, 9]. The answer is 9  + 1 + 2 * 3 * 9 = 64.
    // We could have also partitioned A into [9], [1, 2, 3], [9], for example.
    // That partition would lead to a score of 9 + 6 + 9 = 24, which is lower.