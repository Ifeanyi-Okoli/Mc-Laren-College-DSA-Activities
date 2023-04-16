//loop trace
let fromNum = 2;
let toNum = 4;
let sum = 0;
while (fromNum <= toNum){
    if (fromNum % 2 === 0){
        sum += fromNum;
    }
    fromNum++;
}
console.log(sum);
/*
1. while 2 <= 4 true, fromNum = 2, sum =0
2. while 3 <= 4 true, fromNum = 2, sum =2
3. while 4 <= 4 true, fromNum = 4, sum =2
4. while 5 <= 4 false, fromNum = 5, sum =6
*/