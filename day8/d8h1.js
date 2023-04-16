//Exercise: Format Weather Report
//formatWeatherReport.js
// Create a function formatWeatherReport which 
// takes 3 parameters: cityName, tempC and showFahrenheit
// and returns the weather report string like this:

// In Vancouver it is currently 🥶 37.4°F
// In New Delhi it is currently 🥵 35°C
// In Sydney it is currently 😊 17°C
// In Miami it is currently 🥵 104°F

// Note: Your function formatWeatherReport should call the functions you wrote earlier 
// - ie. convertToEmojiFace and formatTemperatureAsString
// Please refer to this diagram while writing the code:
// https://raw.githubusercontent.com/McLarenCollege/public_images/main/dc41e5976e1acf77.png

// Write the function here:
function formatWeatherReport(cityName, tempC, showFahrenheit) {
    let res = "In " + cityName + " it is currently " + convertToEmoji(tempC) + " " + formatTemperatureAsString(tempC, showFahrenheit);
    return res;
}

function convertToFahrenheit(tempC) {
    let Fahrenheit = tempC * 1.8 + 32;
    Fahrenheit = Fahrenheit + "°F";
    return Fahrenheit;
}

function convertToEmoji(tempC) {
    if (tempC > 30) {
        return "🥵";
    } else if (tempC >= 12) {
        return "😊";
    } else {
        return "🥶";
    }
}

function formatTemperatureAsString(tempC, bool) {
    if (bool) {
        let val = convertToFahrenheit(tempC);
        return val;
    } else {
        val = tempC + "°C";
        return val;
    }
}

let result = formatWeatherReport('Vancouver', 6, true);
console.log(result);
let result1 = formatWeatherReport('New Delhi', 35, false);
console.log(result1);
let result2 = formatWeatherReport('Sydney', 17, false);
console.log(result2);
let result3 = formatWeatherReport('Miami', 40, true);
console.log(result3);

/*
FUNCTION TRACE
formatWeatherReport('Vancouver', 6, true)
  convertToEmoji(6)
    return "🥶"
  formatTemperatureAsString(6, true)
    convertToFahrenheit(6)
      return "42.8°F"
    return "42.8°F"
  return "In Vancouver it is currently 🥶 42.8°F"
*/