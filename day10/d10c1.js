// let a = "F";
// while (a !== "FOOO"){
//     console.log(a);
//     a = a + "O";
// }
// console.log(a);

// let a = "D";
// while (a !== "DOOO"){
//     console.log(a + "G");
//     a = a + "O";
// }
// console.log(a);

let a = [27, 60, 47, 2, 0, 72];
let i = a[0];
while(a[i % 5] > 10){
    console.log(i);
    i += 3;
}