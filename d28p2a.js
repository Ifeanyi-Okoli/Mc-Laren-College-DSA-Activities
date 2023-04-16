// Uncrossed Lines
// Allowed Time: 1hr

// We write the integers of A and B (in the order they are given) on two separate horizontal lines.

// Now, we may draw connecting lines: a straight line connecting two numbers A[i] and B[j] such that:

// A[i] == B[j];

// The line we draw does not intersect any other connecting (non-horizontal) line. Note that a connecting lines cannot intersect even at the endpoints: each number can only belong to one connecting line.

// Return the maximum number of connecting lines we can draw in this way.

// Examples
// Example 1:

function uncrossedLines(arr1, arr2){
    let n = arr1.length;
    let m = arr2.length;
    let count = 0;
    let dp = new Array(n);
    for(let i = 0; i< (n+1); i++){
        dp[i]= new Array(m);
        for(let j = 0; j < (m+1); j++){
            if (i===0 || j===0){
                dp[i][j] = 0;
            }
            else if(arr1[i-1]===arr2[j-1]) dp[i][j] = 1+dp[i-j][j-1];
            else
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);            
        }
        return dp[n][m];
    }

    // for (let i = 0; i <= n; i++){
    //     for(let j = 0; j <=m; j++){
    //         if(i ===0 || j===0) dp[i][j] = 0;
    //         else if(arr1[i-1] === arr2[j-1]){
    //             dp[i][j] = 1 + dp[i-1][j-1];
    //         }
    //         else{
    //             dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
    //         }
    //     }
        
    // }

    // return dp[n][m];
}



let A2 = [1,4,2], B2 = [1,2,4]
// Output: 2
// Explanation: We can draw 2 uncrossed lines as in the diagram.
// We cannot draw 3 uncrossed lines, because the line from A[1]=4 to B[2]=4 will intersect the line from A[2]=2 to B[1]=2.

// Example 2:
let A1 = [2,5,1,2,5], B1 = [10,5,2,1,5,2]
// Output: 3


// Example 3:
let A = [1,3,7,1,7,5], B = [1,9,2,5,1]
// Output: 2

console.log(uncrossedLines(A, B));
console.log(uncrossedLines(A1, B2));
console.log(uncrossedLines(A1, B2));
