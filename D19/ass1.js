// Day 19 Assignments
// Difference Cipher
// Allowed Time: 32 minutes

// It's time to send and receive secret messages.

// Create a single function that takes a string or an array and returns a coded or decoded message.

// The first letter of the string, or the first element of the array represents the Character Code of that letter. The next elements are the differences between the characters: e.g. A +3 --> C or z -1 --> y.

// Examples

function difCiph(arr){
    let res = [];
    let res1 = [];
    for(let i = 0; i < arr.length; i++){
        let code = arr.charCodeAt(i);
        res.push(code);
    }
    console.log(res);
    res1.push(res[0])
    for(let i = 0; i < res.length-1; i++){
        let diff = Math.abs(arr[i] - arr[i+1]);
        res1.push(diff);
    }
    return res1;
}
console.log(difCiph("Hello")) //➞ [72, 29, 7, 0, 3]
// H = 72, the difference between the H and e is 29 (upper- and lowercase).
// The difference between the two l's is obviously 0.

difCiph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]) //➞ "Hi there!"

difCiph("Sunshine") //➞ [83, 34, -7, 5, -11, 1, 5, -9]
// Notes
// The input of the function will always be a string or an array with numbers.