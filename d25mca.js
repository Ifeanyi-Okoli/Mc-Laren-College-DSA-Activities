// Encryption
// The plaintext(P) and key(K) are added modulo 26.
// Ei = (Pi + Ki) mod 26

// Decryption
// Di = (Ei - Ki + 26) mod 26

// Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

// Examples

function VigenereCipher(str, key){
    let result = [];
    let result1 = [];
    let d = alphabet.indexOf("p");
    console.log(d);
    for(let i = 0; i < str.length; i++){
        let a = (alphabet.indexOf(str[i]) + alphabet.indexOf(key[i]))%26;
        
        result.push(alphabet[a]);
        
    }
    let res = result.join("");
    return res;
}


var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';
let word = 'codewars';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
console.log(VigenereCipher(word, key));

// c.encode('codewars'); // returns 'rovwsoiv'
// c.decode('laxxhsj');  // returns 'waffles'```
// Any character not in the alphabet must be left as is. For example (following from above):

// Output:
// c.encode('CODEWARS'); // returns 'CODEWARS'