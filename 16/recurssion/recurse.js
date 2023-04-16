//write a function that countsdown using recurssion
function recurssion(n){
let output = [];
if (n< 0) return output;
else{
function recurse(n){
    output.push(n)
    recurse(n-1);
    
}
}
return output;
}
console.log(recurssion(20));
console.log(recurssion(5));
console.log(recurssion(10));