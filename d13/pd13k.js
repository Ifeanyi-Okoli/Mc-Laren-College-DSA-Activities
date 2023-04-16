// A fibonacci sequence is 1, 1, 2, 3, 5, 8, 13 .... ie. a nth-number in the series is the 
// sum of the (n-1)th and (n-2)th number. Write a program to find the nth fibonacci number in 
// the series.

function fib(n) {
    //base case
    if(n===1 || n ===2){
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

console.log(fib(5)); //5


// //or

// function fib(n) {
//     if (n <= 1)
//         return n;
//     return fib(n-1) + fib(n-2);
// }