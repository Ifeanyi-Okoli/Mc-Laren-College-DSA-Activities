// Number to Google
// Time allocated: 50 mins

// Create a function that takes an array of numbers and returns a string.

// 0 Repeat the previously decrypted value
// The next number after 0 denotes number of repetitions to be done.
// 1, 2, 3, 4 = g, o, l, e
// 5 Convert previous letter to uppercase.
// 6 Add a point to the end.
// 7 Change first letter to uppercase.
// 8 Reverse the string.
// 9 Clear the actual decrypted string.
// Examples

function numToGoogle(arr){
    let res = [];
    
    for (let i = 0; i < arr.length; i++){
        let res1 = "";
        for(let j = 0; j < arr[i].length; j++){
            // console.log(arr[0][3]);
            if(arr[i][j] === "1") res1 = res1 + "g";
            else if(arr[i][j] === "2") res1= res1 + "o";
            else if(arr[i][j] === "3") res1 = res1 + "l";
            else if(arr[i][j] === "4") res1 = res1 + "e";
            else if(arr[i][j] === "6") res1 = res1 + ".";
            else if(arr[i][j] === "5") {
                let array = res1.split("");
                let a = array[array.length-1].toUpperCase();
                let rev = array.splice(array.length-1,1,a);
                res1 = rev.join("");
           }
            else if(arr[i][j] === "7") {
                let array = res1.split("");
                let a = array[0].toUpperCase();
                let rev = array.splice(0,1,a);
                res1 = rev.join("");
           }
            else if(arr[i][j] === "8"){
                 let array = res1.split("");
                 let rev = array.reverse();
                 res1 = rev.join("");
            }
            else if(arr[i][j] === "9") res1.replace(res1, "");
            else if(arr[i][j] === "0") {
                let b = res1[res1.length-1];
                res1 = res1+ b+ b+ b;
            }
            
            
        }
        res.push(res1);
    }
    return res;
}


console.log(numToGoogle(["12213467"])) //➞ "Google."

// console.log(numToGoogle(["12213467", "321"])) //➞ "Google.log"

// console.log(numToGoogle(["12213467", "321", "122906"])) //➞ "Google.log"

// console.log(numToGoogle(["15", "2502", "15", "345"])) //➞ "GOOGlE"

// console.log(numToGoogle(["15", "2502", "15", "35", "45"])) //➞ "GOOGLE"

// console.log(numToGoogle(["15", "202", "1", "3", "4"])) //➞ "Google"