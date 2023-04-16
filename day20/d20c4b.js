function uniqueInOrder(input){
    let result = [];
for (let i = 0; i< input.length; i++){
    if (input[i] !== input[i+1]){
        result.push(input[i])
    }
}
    return result;
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'));//  ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));// ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));// [1,2,3]