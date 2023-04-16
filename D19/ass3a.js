// Print increasing sequence
// Allowed Time:45 mins

// Print all increasing sequences of length k using only the first n natural numbers.

// Note: Natural numbers starts from 1.

// Example:

// Input: 
// k = 3
// n = 5

// Output:
// 123, 124, 125, 134, 135, 145, 234, 235, 245, 345

function increasingSequence(num, k){
    let res = [];
    let result= [];
    let numArr = [];
for(let i = 1; i <= num; i++){
    numArr.push(i);
}
for(let i = 0; i < numArr.length-2; i++){
    for(let j = 1; j<numArr.length-1; j++){
        for(let k = 2; k < numArr.length; k++){
            let a=""+numArr[i]+numArr[j]+numArr[k]
            res.push(a);
        }
    }
}
// console.log(res)
for(let i = 0; i <res.length; i++){
    for(let j = 0; j < res[i].length; j++){
        // console.log(res[i][j])
        if(res[i][j] < res[i][j+1] && res[i][j+2] > res[i][j+1]){
            result.push(parseInt(res[i]));
        }
    }    
}
return result;
}


console.log(increasingSequence(5, 3));