function countDown(n){
    console.log(n);
    if(n> 0){
        countDown(n-1);
    }
}

console.log(countDown(5));
console.log(countDown(10));