function foo(x, y){
    return x * y + 3;
}

function bar(x, y){
    return y * 3;
}

function yee(op, p1, p2){
    return op(p1, p2) + op(p2, p1);
}
console.log(yee(bar, 6, 2)); //24
console.log(yee(foo, 8, 10)); //166