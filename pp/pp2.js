//Map function is used to transform an array.
let arr = [5, 3, 5, 7, 1, 4];

//DOuble

//Tripple

//Binary

function double(x){
    return x * 2;
}

function tripple(x){
    return x * 3;
}

function tripple(x){
    return x.toString(2);
}
let output = arr.map(tripple);

let output1 = arr.map(function binary(x){
    return x.toString(2);
});

let output2 = arr.map((x) => {
    return x.toString(2);
});

let output3 = arr.map((x) => x.toString(2));


console.log(output);