// Print increasing sequence
// Allowed Time:45 mins

// Print all increasing sequences of length k using only the first n natural numbers.

// Note: Natural numbers starts from 1.

Example:

Input: 
k = 3
n = 5

Output:
123, 124, 125, 134, 135, 145, 234, 235, 245, 345

function increase(num, k){
    let res = [];
while(k<=5){
    num.push(k+1);
    res.push(num);
    num.pop();
}
return res;
}

function increseaSequence(num = [1, 2, 3], k, n){
    let res = [];
    res.push(num)
    let num1 = num.splice(2,1);
    for (let i = 0; i < array.length; i++){

    }
}