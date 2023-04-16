//Create a function that takes a string and returns the first character that occurs thrice. If 
//there is no character that occurs thrice, return "-1".

// CODE TEMPLATE

function occursThrice(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]]++;
        }
    }
    let max = -Infinity;
    let res;
    for (j in obj) {

        if (obj[j] > max) {
            max = obj[j];
            res = j;
        }
    }
    if (max < 3) {
        return -1
    }
    return (res);
}
console.log(occursThrice("abcdabcdabcd"));//a
console.log(occursThrice("abcdabcdd"));//d
console.log(occursThrice("abcdabcdpqrs"));//-1
console.log(occursThrice("aabba"));//a
// Note
// The string will contain lowercase letters only