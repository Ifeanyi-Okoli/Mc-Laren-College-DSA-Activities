// Restore IP Addresses
// Allowed Time: 45 minutes

// Given a string containing only digits, restore it by returning all possible valid IP address combinations.

// A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single points.

// Examples

function ipAddress(str=""){

let len = str.length;
//check if lenght is between 4 and 12
if(len < 4 || len > 12) return "invalid IP address";
let result = [];
let ip = "";
for(let i = 1; i<3; i++){
    let part1 = str.substring(0,i);
    for(let j = i+1; j < len -1; j++){
        let part2 = str.substring(i+1,j);
        //     if (+sub <= 255 && +sub>= 0) result.push(sub);
        for(let k = j+1; k < len; k++){
            let part3 = str.substring(j+1,k);
            let part4 = str.substring(k);
            // console.log(part1);
            // console.log(part2);
            // console.log(part3);
            console.log(part4);
        }
    }
}


}


let A = "25525511135";
// Output: ["255.255.11.135", "255.255.111.35"]

let B= "010010";
Output: ["0.10.0.10", "0.100.1.0"]
// Note
// The input will have length between 4 and 12

console.log(ipAddress(A));
// console.log(ipAddress(B));