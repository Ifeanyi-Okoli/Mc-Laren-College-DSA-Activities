//Task
// Given an array of numbers and an index, return either the index of the smallest number that is 
//larger than the element at the given index, or -1 if there is no such index 
//( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
function least(arr){
    let min;
    if (arr.length === 1){
        return arr[0];
    }
    for (let k = 0; k < arr.length-1; k++){
        if (arr[k] < arr[k+1]){
            min = arr[k];
        }
    }
    return min;
}
function leastLarger(a,i) {
    let temp = [];
    for (let j = 0; j < a.length; j++){
        if (a[j]> a[i]){
            temp.push(a[j]);
        }
    }
    if(a[i] >= least(temp)){
        return -1;
    }
    return a.indexOf(least(temp));
  }

  console.log( leastLarger( [4, 1, 3, 5, 6], 0 ));//3
  console.log( leastLarger( [4, 1, 3, 5, 6], 4 ));//-1
  console.log( leastLarger( [1, 3, 5, 2, 4], 0 ));//3