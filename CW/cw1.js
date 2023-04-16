// Write a function that calculates the least common multiple of its arguments; each argument
// is assumed to be a non-negative integer. In the case that there are no arguments 
//(or the provided array in compiled languages is empty), return 1.

var lcm = function (num1, num2, num3) {
    let i = 0;
    if (num1 !== undefined && num1 > i){
        i = num1;
    }
    if (num2 !== undefined && num2 > i){
        i = num2;
    }
    if (num3 !== undefined && num3 > i){
        i = num3;
    }
    if (num2 === undefined && num3 === undefined){
        return num1;
    }
    if (num3 === undefined){
        while(i <= num1*num2){
            if(i % num1 === 0 && i % num2 === 0){
                return i;
            }
            i++;
        }
    }
    else if (num2 === undefined){
        while(i <num1*num3){
            if(i%num1 === 0 && i%num3 === 0){
                return i;
            }
            i++;
        }
    }
    else if (num1 === undefined){
        while(i <num2*num3){
            if(i%num2 === 0 && i%num3 === 0){
                return i;
            }
            i++;
        }
    }
    else{
    while(i <num1*num2*num3){
        if(i%num1 === 0 && i%num2 === 0 && i%num3 === 0){
            return i;
        }
        i++;
    }
  }
}
 console.log(lcm(2,5));//,10
 console.log(lcm(2,3,4));//,12
 console.log(lcm(9));//,9

