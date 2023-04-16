// Given a list of numbers, sort it such that odd numbers are before even 
// numbers and these numbers are sorted among them. e.g. for input 
let arr = [1, 44, 5, 6, 12, 91, 7, 24]; //, your function should return 

function compare(n1, n2){
  if(n1%2 === 1 && n2%2 === 0){
    return -1;
  }
  if(n1%2 === 0 && n2%2 === 1){
    return 1;
  }
return n1-n2;
}

console.log(arr.sort(compare));