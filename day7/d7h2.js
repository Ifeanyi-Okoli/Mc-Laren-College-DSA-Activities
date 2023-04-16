//Exercise: Format temperature as string
//formatTemperatureAsString.js
// Write a function called formatTemperatureAsString which takes two parameters
// The first parameter is the temperature in celsius
// The second parameter is whether to convert to fahrenheit
// The function should return a formatted string like "37.4°F" or "17°C"
//
// Note: If the second parameter is true, the function should call 
// the convertToFahrenheit function you wrote earlier.

// Write your code here
function formatTemperatureAsString(tempC, bool) {
    if (bool) {
        let val = convertToFahrenheit(tempC);
        return val;
    } else {
        val = tempC + "°C";
        return val;
    }
}

let result = formatTemperatureAsString(12, false);
console.log(result);  // should print 12°C
result = formatTemperatureAsString(37, true);
console.log(result);  // should print 98.6°F

function convertToFahrenheit(tempC) {
    let Fahrenheit = tempC * 1.8 + 32;
    Fahrenheit = Fahrenheit + "°F";
    return Fahrenheit;
}

/*
FUNCTION TRACE
formatTemperatureAsString(37, true)
  convertToFahrenheit(37)
    return "98.6°F"
  return "98.6°F"
*/