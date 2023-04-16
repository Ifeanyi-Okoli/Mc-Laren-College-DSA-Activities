// function beautifulDays(i, j, k) {
//     // Write your code here
//     let count = 0;       
//     for(let m= i; m<=j; m++){
//         let b = m.toString();
//         let num = "";         
//         for(let n = b.length-1; n>=0; n--){
//             //console.log(n);
//             num += b[n];
//         }
        
//         let a = Math.abs(parseInt(num - m));
//         console.log(a);
//         if(a%k === 0) count++;
//     }
//     return count;
// }

// console.log(beautifulDays(20, 23, 6));

//


function beautifulDays(i, j, k) {
    // Write your code here
    let count = 0;       
    for(let m= i; m<=j; m++){
        let b = m.toString().split("").reverse().join("");        
        let a = Math.abs(parseInt(b - m));
        if(a%k === 0) count++;
    }
    return count;
}

console.log(beautifulDays(20, 23, 6));