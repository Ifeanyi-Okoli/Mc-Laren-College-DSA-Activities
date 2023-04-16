//Exercise : Array Operation
//arrayOps.md
//You are given an array.
let arr = ['Blah',false,true,'Hello',7];
//If the second element of arr is true, print the third element, 
//otherwise print the fourth element
if (arr[1] === true){
    console.log(arr[2])
}
else{
    console.log(arr[3]);
}
//or

//arr[1] === true ? console.log(arr[2]) : console.log(arr[3]);