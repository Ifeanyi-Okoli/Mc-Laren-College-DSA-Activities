function billboard(words, dimensions){
    let row = dimensions[0];
    let col = dimensions[1];
    return {width: row, height: col}
}
let result = billboard("hello", [2, 5]);
let width = result.width;
console.log(width);

