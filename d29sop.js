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
// Approach 2
const allComb = (n, k) => {
  if(n < k || k < 1){
      return [];
  }
  else if(k == 1){
      return [[n]];
  }
  else{
      let result = [];
      for(let i=1; i<=k+1; i++){
          for(let partialSol of allComb(n-i, k-1)){
              partialSol.push(i);
              result.push(partialSol);
          }
      }

      return result;
  }
}

const largestSOP = (input, k) => {
  let ranges = allComb(input.length, k);
  let maxSOP = 0;
  
  for(let range of ranges){
      let [start, sop, end] = [0, 0, 0];
      
      for(let milestone of range){
          end += milestone;
          let product = 1;  
            
          while(start < end){
              product *= input[start];
              start += 1;
          }
      
          sop += product;
      }

      maxSOP = Math.max(maxSOP, sop);
  }

  return maxSOP;
}

console.log(LSOP([9, 1, 2, 3, 9], 3));
console.log(largestSOP([9, 1, 2, 3, 9], 3));
console.log(LSOP([1, 2, 3, 4, 5], 4));
console.log(largestSOP([1, 2, 3, 4, 5], 4));
console.log(LSOP([2, 4, 7, 3, 6, 5], 3));
console.log(largestSOP([2, 4, 7, 3, 6, 5], 3));