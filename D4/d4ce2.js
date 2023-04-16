//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters 
//after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are 
//numbers or special characters included in the string, they should be returned as they are. 
//Only letters from the latin/english alphabet should be shifted, like in the original Rot13 
//"implementation".

// Example
function rot13(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const code = str[i].charCodeAt(0) + 13;
        if (code > 122) {
            const code1 = code - 26;
            const letter1 = String.fromCharCode(code1);
            result = result + letter1;
        }
        else {
            const letter = String.fromCharCode(code);
            result = result + letter;
        }

    }
    return result;
}
console.log(rot13('grfg')); // returns 'test'
console.log(rot13('abcd'));//.toBe('nopq');
console.log(rot13('cart'));//.toBe('pneg');