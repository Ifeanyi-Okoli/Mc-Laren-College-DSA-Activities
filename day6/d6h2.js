//Exercise: Weather Report
//weather_report.md
//Print the location and temperature in Celsius or Fahrenheit based on the users preference. 
//Prefix the temprature with an emoji as follows:

// 🥵 if temperature in Celsius is above 30
// 😊 if temperature in Celsius is between 12 and 30
// 🥶 if temperature in Celsius is below 12
// Your output should be in the following format:

// In Vancouver it is currently 🥶 37.4°F 
// In New Delhi it is currently 🥵 35°C 
// In Sydney it is currently 😊 17°C 
// In Miami it is currently 🥵 104°F
// CODE TEMPLATE

let preferCelsius = false;
let tempC = 3;
let location = 'Vancouver';
let emojiFace;
let temperatureString;
if (tempC < 12) {
    emojiFace = '🥶';
} else if (tempC >= 12 <= 30) {
    emojiFace = "😊";
} else {
    emojiFace = "🥵";
}

if (preferCelsius === true) {
    temperatureString = tempC + "°C";
} else {
    temperatureString = (tempC * 1.8 + 32) + "°F";
}
console.log("In " + location + " it is currently " + emojiFace + " " + temperatureString);

// Write your code here
// Tip: Here's how to solve this problem:

// Create a variable called emojiFace and the use an if-else-if expression to set the value to
//"🥵" or "😊" or "🥶"
// notice that these values are just strings like "Hello" or "Y"
// Create another variable called temperatureString and use an if-else expression to set the
//value to a formatted string like "37.4°F" or "17°C"

// Combine the variables location, emojiFace and temperatureString into a string which is printed
//to the console