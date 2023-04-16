// Add your city to Weather Object
// addCityToWeather.md
let weather = {
  London: {
    temp: 37,
    humidity: 44,
  },
  Mumbai: {
    temp: 32,
    humidity: 80,
  },
};
// Task 1
// Create a variable myCity and assign to it the name of your current city.
let myCity = "Yola";
// Task 2:
// Add a property to the weather object with your city and current weather numbers 
//of your city in same format. Use the myCity variable while adding property.
myCity = {
    'Yola': {
        temp: 42,
        humidity: 54
    }
};
console.log(myCity);
// Task 3:
// Compare your city temperature to London and Mumbai and print one of the following outputs

if (myCity.Yola.temp > weather.London.temp){
  console.log(" Yola is hotter than London");
}
else if(myCity.Yola.temp === weather.London.temp){
  console.log(" Yola is having the same temperature as London");
}
else{
  console.log(" Yola is colder than London");
}

if (myCity.Yola.temp > weather.Mumbai.temp){
  console.log(" Yola is hotter than Mumbai");
}
else if(myCity.Yola.temp === weather.Mumbai.temp){
  console.log(" Yola is having the same temperature as Mumbai");
}
else{
  console.log(" Yola is colder than Mumbai");
}

// Task 4:
// Compare your city humidity to London and Mumbai and print

if (myCity.Yola.humidity > weather.London.humidity){
  console.log(" Yola is more humid than London");
}
else if(myCity.Yola.humidity === weather.London.humidity){
  console.log(" Yola is having the same humidity as London");
}
else{
  console.log(" Yola is less humid than London");
}

if (myCity.Yola.humidity > weather.Mumbai.humidity){
  console.log(" Yola is more humid than Mumbai");
}
else if(myCity.Yola.humidity === weather.Mumbai.humidity){
  console.log(" Yola is having the same humidity as Mumbai");
}
else{
  console.log(" Yola is less humid than Mumbai");
}



// " `My city` is more/less humid than London"
// " `My city` is more/less humid than Mumbai"
// " `My city` is having the same humidity as London/Mumbai"