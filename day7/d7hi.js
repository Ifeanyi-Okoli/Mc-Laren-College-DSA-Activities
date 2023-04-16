//Convert To Fahrenheit
//convert_to_fahrenheit.js
// Write a function called convertToFahrenheit which takes a single 
// parameter which is the temperature in degrees Celsius.  The function
// should return the corresponding temperature in degrees Fahrenheit.


// Write your code here
function convertToFahrenheit(tempC){
let Fahrenheit = tempC * 1.8 + 32;
Fahrenheit = Fahrenheit + "°F";
return Fahrenheit;
}

let freezing = convertToFahrenheit(0);
console.log(freezing); // should print 32

let ovenTemp = convertToFahrenheit(200);
console.log(ovenTemp); // should print 392