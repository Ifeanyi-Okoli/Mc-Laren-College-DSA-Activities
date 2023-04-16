//Exercise : Sum from a to b
// sumFromatob.md
// Create a function with two parameters a and b that calculates the sum of 
//all the numbers between a and b and returns it. 
//Both a and b are included in the sum.

// CODE TEMPLATE

function sumBetween(a, b){
    let sum = 0;
    if (a === b){
        return (a);
    }
    if (a < b){
        while (a <= b){
            sum = sum + a;
            a++;  
    }
    return sum;
    } else {
        while (a >= b){
            sum = sum + a;
            a--;  
    }
    return sum;
    }
    
}
console.log(sumBetween(5, 8));//
console.log(sumBetween(6, 12));//63
console.log(sumBetween(6, 6));//6
console.log(sumBetween(10, 8));//27

//=============================
// function sumBetween(a, b){
//     let sum = 0;
//     while(a<=b){
//         sum = sum + a;
//         a++;
//     }
//     return sum;
// }