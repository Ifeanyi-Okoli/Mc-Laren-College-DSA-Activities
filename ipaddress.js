// Restore IP Addresses
// Allowed Time: 45 minutes

// Given a string containing only digits, restore it by returning all possible valid IP address combinations.

// A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single points.

// Examples

function ipAddress(str="") {
    let len = str.length;
    //check if lenght is between 4 and 12
    // if(len < 4 || len > 12) return "invalid IP address";
    let result = [];
     let checkIP = (temp, countOfSegments, start) => {
        if (countOfSegments === 4 && start === len) {
            result.push(temp);
        }
        if (countOfSegments < 4) {
            for (let i = start; i < start + 3 && i < len; i++) {
                let num = str.slice(start, i + 1)
                if (num <= 255) {
                    checkIP(temp + (temp === "" ? "" : ".") + num, countOfSegments + 1, i + 1);
                    if(num === 0) break;
                }else{
                    break;
                }
            }
        }
    }
    checkIP("", 0, 0);

    return result;
}




let A = "25525511135";
// Output: ["255.255.11.135", "255.255.111.35"]

let B = "010010";
Output: ["0.10.0.10", "0.100.1.0"]
// Note
// The input will have length between 4 and 12

console.log(ipAddress(A));
console.log(ipAddress(B));