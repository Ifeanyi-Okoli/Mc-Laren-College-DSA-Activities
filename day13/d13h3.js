// function encode(str) {
//     let result = '';
//     for (let i = 0; i < str.lenght; i = i + 3) {
//         result = result + (str[i]);
//        }
//     for (let i = 1; i < str.lenght; i = i + 3) {
//         result = result + (str[i]);
//         
//     }
//     for (let i = 2; i < str.lenght; i = i + 3) {
//         result = result + (str[i]);
//         
//     }
//     return result;
// }
// let msg = 'ICE CREAM';
// console.log(encode(msg)); // "I ECCAERM"
// console.log(encode("Today is Monday"));// "TaiMdoysoad  ny"

function encode(str){
    let result = '';
    for (let i = 0; i < str.length; i=i+3){
      result = result + (str[i]);
    }
    for (let i = 1; i < str.length; i=i+3){
      result = result + (str[i]);
    }
    for (let i = 2; i < str.length; i=i+3){
      result = result + (str[i]);
    }
    return result;
    }
    let msg = 'ICE CREAM';
    console.log(encode(msg)); // "I ECCAERM"
    console.log(encode("Today is Monday"));// "TaiMdoysoad  ny"
    