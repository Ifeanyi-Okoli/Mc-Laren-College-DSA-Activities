let numbers = [10, 20, 30];
if (numbers[numbers[0] % 8] >= numbers[2]){
    console.log("Greater or equal");
}else{
    console.log("smaller");
}
/*
EXPRESSION TRACE
numbers[numbers[0] % 8] >= numbers[2]
numbers[10 % 8] >= numbers[2]
numbers[2] >= numbers[2]
30 >= numbers[2]
30 >= 30
true
*/