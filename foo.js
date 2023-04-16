// Draw the object diagram for the following code and evaluate the output.

let a = [{ foo: 'x', bar: 'y', k: 0 }, 'oo', [0, 2]]
let b = [a[2], { blah: a }];
b[0][a[1] + 'p'].foo = 'k';

console.log(b[1].blah[0]['f' + a[1]] + 'p');
/*
EXPRESSION TRACE
b[0][a[1] + 'p'].foo = 'k'
op1[a[1] + 'p'].foo = 'k'
op1["oo" + 'p'].foo = 'k'
op1["oop"].foo = 'k'
undefined.foo = 'k'
*/