// Take this code and re-write it to use single reduce function. Put the time it took for your code 
//to run in a comment on Airtable when you submit.

function minMaxTotal(arr) {
    let getMinMaxTotal = (acc, curr) => {
        acc[0] = Math.min(acc[0], curr);
        acc[1] = Math.max(acc[1], curr);
        acc[2] = acc[2] + curr;
        return acc;
    }
    return arr.reduce(getMinMaxTotal, [arr[0], arr[1], 0]);
}

let arr = new Array(10000000).fill(0).map((item) => Math.floor(Math.random() * 10000 + 10000));
// you can try priting the array to find out whats inside it.

console.time('functionTime');
console.log(minMaxTotal(arr));
console.timeEnd('functionTime');