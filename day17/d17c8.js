//Exercise : Delete True From Beginning of Array
// deleteTrueFromBeginningOfArray.md
// Write code to remove all the true values from the begining of a boolean array and returns 
//the modified array.

// HINT : Consider using a while loop instead of a for loop

// CODE TEMPLATE

function deleteTrueFromBeginning(arr){
for (let i = 0; i < arr.length; i++){
    if (arr[i] === false){
        return arr;
    }
    else if (arr[i] === true){
        arr.shift();
    }
}
return arr;
}
let arr = [true,true,false,false,false,true,true,false];
console.log(deleteTrueFromBeginning(arr));// should return [false,false,false,true,true,false]
arr = [true,true,true,true,true];
console.log(deleteTrueFromBeginning(arr));// should return []