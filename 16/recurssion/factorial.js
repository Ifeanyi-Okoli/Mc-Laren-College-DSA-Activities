function recurse(x){
    if(x === 0) return 1;
    else{
        return x * recurse(x-1);
    }
}

function factorial(num){
    let result;
    if (num>0){
        result = recurse(num);
    }
    return result;
}

console.log(factorial(8));
console.log(factorial(4));
console.log(factorial(6));
