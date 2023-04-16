function sum(arr){

    let reducer = (acc, curr)=> acc + curr;
    let initialValue = 0;
    return arr.reduce(reducer, initialValue);
}

console.log(sum([1, 3, 5, 7]));