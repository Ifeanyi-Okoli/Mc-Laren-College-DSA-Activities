function count(str, n){
    //base case
    if(n === 0 || n === 1){
        return 1;
    }
    let sum = 0;

    //for single digits.
    if(str[n-1] >= "1" && str[n-1] <= "9"){
        sum = count(str, n-1);
    }
//for double digits.

    if(str[n-2] === "1" || (str[n-2] === "2" && str[n-1] <= "6")){
        sum +=count(str, n-2);
    }
    return sum;
}


function decode(str){
    let l = str.length;
   
    return count(str, l);
}

console.log(decode("12"));//2
console.log(decode("226"));//3
console.log(decode("1"));//1
console.log(decode("112515"));//10
console.log(decode("112515"));//10
console.log(decode("101"));//1
console.log(decode("333344441121"));//5
console.log(decode("1120123121"));//18
console.log(decode("202"));//1
console.log(decode("20"));//1
console.log(decode("2021"));//2
