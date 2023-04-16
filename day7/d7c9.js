function fullName(fname, lname) {
    return fname + ' ' + lname;
}
function bar(fname) {
    return fname;
}
function foo(lname){
    console.log(lname);
}
let res = fullName(bar('John'), foo('Tree')); // making multiple function calls on same line
console.log(res);
/*
FUNCTION TRACE
bar('John')
  return 'John'

foo('Tree')
  return undefined

fullName('John', undefined)
  return 'John undefined' 
*/