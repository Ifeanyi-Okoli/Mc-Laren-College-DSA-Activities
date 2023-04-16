
function uncrossedLines(arr1, arr2) {
    let results = new Array(arr1.length+1);
    for(let i = 0; i <arr1.length+1; i++){
        results[i]=new Array(arr2.length+1).fill(0)
    }
    let n = arr1.length;
    let m = arr2.length;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (arr1[i-1] === arr2[j-1]) {
                results[i][j] = results[i - 1][j - 1] + 1;
            }

            else
                results[i][j] = Math.max(results[i][j - 1], results[i - 1][j]);
        }
    }
    return results[n][m];
}


let A2 = [1, 4, 2], B2 = [1, 2, 4]
// Output: 2
// Explanation: We can draw 2 uncrossed lines as in the diagram.
// We cannot draw 3 uncrossed lines, because the line from A[1]=4 to B[2]=4 will intersect the line from A[2]=2 to B[1]=2.

// Example 2:
let A1 = [2, 5, 1, 2, 5], B1 = [10, 5, 2, 1, 5, 2]
// Output: 3


// Example 3:
let A = [1, 3, 7, 1, 7, 5], B = [1, 9, 2, 5, 1]
// Output: 2

console.log(uncrossedLines(A, B));
console.log(uncrossedLines(A1, B2));
console.log(uncrossedLines(A1, B2));