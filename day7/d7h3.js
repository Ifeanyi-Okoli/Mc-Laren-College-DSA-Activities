// Exercise : Convert to Emoji Face
// convertToEmojiFace.js
// Write a function called convertToEmoji which takes the temperature in Celsius
// and returns
// "🥵" if temperature in Celsius is above 30
// "😊" if temperature in Celsius is between 12 and 30
// "🥶" if temperature in Celsius is below 12

// Write your function here:
function convertToEmoji(tempC){
    if (tempC > 30){
        return "🥵";
    }else if (tempC >= 12){
        return "😊";
    }else {
        return "🥶";
    }
}


// Call your function here passing 30 and print the resulting emoji to console
let emojiTemp = convertToEmoji(30);
console.log(emojiTemp);