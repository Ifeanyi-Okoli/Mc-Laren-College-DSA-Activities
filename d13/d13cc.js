function arraySum(arr = [] ){
    // base case
    if(arr.length===0){
        return 0;
    }
    if(arr.length === 1){
        return arr[0];
    }
    let curr = arr.shift();
    let remainingSum = arraySum(arr);
    return curr + remainingSum;
}

console.log(arraySum([1,2,3])); // should print 6