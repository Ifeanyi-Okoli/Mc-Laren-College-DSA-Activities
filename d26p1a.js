// Approach 1
function LSOP(arr, k) {
    let n = arr.length;
    let maxSOP = 0;
  
    if (k === 1) {
      return arr.reduce((acc, curr) => acc * curr, 1);
    }
  
    for (let i = 1; i <= n - k + 1; i++) {
      let leftSubArr = arr.slice(0, i);
      let rightSubArr = arr.slice(i);
      let leftProduct = leftSubArr.reduce((acc, curr) => acc * curr, 1);
      let sop = leftProduct + LSOP(rightSubArr, k - 1)
      maxSOP = Math.max(maxSOP, sop)
    }
    return maxSOP;
  }

  
console.log(LSOP([9, 1, 2, 3, 9], 3));
console.log(LSOP([1, 2, 3, 4, 5], 4));

console.log(LSOP([2, 4, 7, 3, 6, 5], 3));