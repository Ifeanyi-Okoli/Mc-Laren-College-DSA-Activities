// Challenge 2 - Power Set
// Power Set of a set S is the set of all subsets of S.

// Set A is a subset of a set B if all elements of A are also elements of B. And B is said 
//to be superset of A.

// Example
function powerSet(arr){
  let res = [];
  res.push([]);
  for (let j = 0; j < arr.length; j++){
    res.push([arr[j]]);
    for(let i = j+1; i < arr.length; i++){
      res.push([arr[j], arr[i]]);

    }
  
  } 
  res.sort((a, b) => a.length - b.length);
  res.push([arr]);
  return res;
}

let arr = ["a", "b", "c"]
// Then power set of `arr` will be
// [ 
//   [],
//   [a],
//   [b],
//   [c],
//   [a, b],
//   [a, c],
//   [b, c],
//   [a, b, c] 
// ]


console.log(powerSet(arr));
// Note:
// If arr has n elements in it then power set will have 2^n elements