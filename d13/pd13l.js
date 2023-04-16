// There are n stairs(positive value), a person standing at the bottom wants to reach the top.
//  The person can climb either 1 stair or 2 stairs at a time. Count the number of ways, the 
//  person can reach the top.

// Part 1:

// Draw the recursion tree diagram for no of stairs = 4

// Part 2:

// Write the code to count total number of ways.

// function waysToTop(n){
// if(n===0 || n === 1) return 1;
// else if(n === 2) return 2;
// let sum = 1;
// for (let i = 1; i < n; i++){
// sum = sum + waysToTop(n-i);
// }
//  return sum -1;
// }

// or

function waysToTop(n) {
    if (n === 0 || n === 1) return 1;
    else if (n === 2) return 2;
    else{
        let oneStep = waysToTop(n-1);
        let twoStep = waysToTop(n-2);
        return oneStep + twoStep;;
        
    }
    
}

console.log(waysToTop(4));