function sockMerchant(n, ar) {
    // Write your code here
let obj = {};
let count = 0;
for(let i = 0; i < n; i++){
    let curr = ar[i];
    if(obj[curr]===undefined) obj[curr]=1;
    else obj[curr]++;
}
for(let a in obj){
    if(obj[a]>1){
        count += Math.floor(obj[a]/2);
    }
}
return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));