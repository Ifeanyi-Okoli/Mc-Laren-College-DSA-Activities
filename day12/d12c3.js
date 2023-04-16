let arr = [[true, false, 'hello'], [0, 1, 'world'], 'foo', 'bar'];
for (let i = arr[1][0]; false !== arr[(i + 1) % 4][1]; i++){
    let x = arr[i][0] === 'f' ? 'hot' : 'cold';
    console.log(x);
}