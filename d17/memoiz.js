// Use the memoization to optimize the below code and draw the recursive tree diagram 
//of the optimized code. There are n stairs(positive value), a person standing at the 
//bottom wants to reach the top. The person can climb either 1 stair or 2 stairs at a 
//time. Count the number of ways, the person can reach the top.

function noOfWays(n, cache = {}) {
    if (n < 0) return 0;
    
    if (cache[n] !== undefined) return cache[n];
    if (n === 0 || n === 1) return 1;
   
    else {
        cache[n] = noOfWays(n - 1) + noOfWays(n - 2);
        return cache[n];
    }
}

console.time();
console.log(noOfWays(42));
console.timeEnd();