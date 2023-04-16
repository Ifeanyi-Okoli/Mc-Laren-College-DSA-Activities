function numberRange(start, end){
if (end > start){
    let result = numberRange(start, end-1);
    // result.push(end);
    return result;
}
}

console.log(numberRange(1, 10));
console.log(numberRange(1, 5));
console.log(numberRange(2, 7));