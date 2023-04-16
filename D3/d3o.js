function foo(x, y){
    return x * y + 3;
}
function bar(x, y){
    return y * 3;
}
function yeehaa(op1, op2, p1, p2){
    return op2(op1(p1, p2), op1(p2, p1));
}
console.log(yeehaa(foo, bar, 6, 2));//45