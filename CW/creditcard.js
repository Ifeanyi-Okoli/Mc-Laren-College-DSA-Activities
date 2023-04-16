// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// return masked string

/*
function maskify(cc) {
   let inputArr = cc.split("").map((letter, index, array) =>{
        if(index < array.length -4){
            return "#";
        }else{
            return letter;
        }
    }).join("");

return inputArr;
}

console.log(maskify("4556364607935616"));// --> "############5616"
console.log(maskify("64607935616"));// -->      "#######5616"
console.log(maskify("1"));// -->                "1"
console.log(maskify(""));// -->                 ""

// "What was the name of your first pet?"

console.log(maskify("Skippy"))// --> "##ippy"

console.log(maskify("Nananananananananananananananana Batman!"));
// -->
// "####################################man!"


//or
/*
function maskify(cc) {
    let masked = "";
//iteratet from the end

for(let i = cc.length-1; i >=0; i--){
    let letter = cc[i];
    if(i >cc.length-5){
        masked = letter + masked;
    }else{
        masked="#" + masked;
    }
}
//push the first four elelments into result

//mask the rest

return masked;
}

console.log(maskify("4556364607935616"));// --> "############5616"
console.log(maskify("64607935616"));// -->      "#######5616"
console.log(maskify("1"));// -->                "1"
console.log(maskify(""));// -->                 ""

// "What was the name of your first pet?"

console.log(maskify("Skippy"))// --> "##ippy"

console.log(maskify("Nananananananananananananananana Batman!"));

*/

//or

function maskify(cc) {
    let masked = "";
//iteratet from the end

for(let i = 0; i < cc.length; i++){
    let letter = cc[i];
    if(i <cc.length-4){
        masked += "#";
    }else{
        masked+= letter;
    }
}
//push the first four elelments into result

//mask the rest

return masked;
}

console.log(maskify("4556364607935616"));// --> "############5616"
console.log(maskify("64607935616"));// -->      "#######5616"
console.log(maskify("1"));// -->                "1"
console.log(maskify(""));// -->                 ""

// "What was the name of your first pet?"

console.log(maskify("Skippy"))// --> "##ippy"

console.log(maskify("Nananananananananananananananana Batman!"));