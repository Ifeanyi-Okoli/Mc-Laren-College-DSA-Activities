let arr = [5,6,7,3,4,1,9];

//odd

function isOdd(x){
    return x % 2;
}

function isEven(x){
    return x % 2 === 0;
}

let output = arr.filter(isEven);
console.log(output);

let output1 = arr.filter(function isEven(x){
    return x % 2 === 0;
});
console.log(output1);

let output2 = arr.filter((x) => x % 2 === 0);
console.log(output2);