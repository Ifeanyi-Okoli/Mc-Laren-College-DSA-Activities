//Encode Message
// every_third_character_encoded.md
// Write a function that encodes a given string by constructing a new string adding every 
//third character.

// Encoding process begins with the first character and every third character is added to the 
//encoded message till we reach the end of the string. The encoding process then starts with the 
//second character and we jump every two characters till we reach the end of the string. Then we 
//start a similar process starting with the third character.

// Please refer to the image to understand the encoding process.

// https://raw.githubusercontent.com/McLarenCollege/public_images/main/encode.jpg

// CODE TEMPLATE

function encode(str) {
    let result = '';
    for (let i = 0; i < str.lenght; i = i + 3) {
        result = result + (str[i]);
        console.log(result);
    }
    for (let i = 1; i < str.lenght; i = i + 3) {
        result = result + (str[i]);
        console.log(result);
    }
    for (let i = 2; i < str.lenght; i = i + 3) {
        result = result + (str[i]);
        console.log(result);
    }
    return result;
}
let msg = 'ICE CREAM';
console.log(encode(msg)); // "I ECCAERM"
console.log(encode("Today is Monday"));// "TaiMdoysoad  ny"