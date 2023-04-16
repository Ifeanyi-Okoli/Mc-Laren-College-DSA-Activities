// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// function moveZeros(arr){
//     //a place to store non-zero elements
//     let movedZero = [];
//     //zero count
//     let zeroCount=0;
//     //iterate over the array
//     for(let i = 0; i < arr.length; i++){
//         let ele = arr[i];
//         if(ele !== 0) movedZero.push(ele);
//         else{
//             zeroCount++;
//         }
//     }
//     for(let i = 0; i < zeroCount; i++){
//         movedZero.push(0);
//     }
//     return movedZero;
// }


// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]


//or using reduce

// function moveZeros(arr){
//    let zeroCount=0;
//     let movedZeros = arr.reduce((movedZeros, value, index) => {
//         if(value !== 0) movedZeros[index -zeroCount] = value;
//         else{
//             zeroCount++;
//         }
//         return movedZeros;
//     }, new Array(arr.lenght).fill(0));
    
//     return movedZeros;
// }

//or using 

var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
  }

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]