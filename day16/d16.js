//Exercise : Weather Challenge
// weatherChallenge.md
let weather = {
    London: {
        temp: 37,
        humidity: 44,
    },
    Patna: {
        temp: 32,
        humidity: 80,
    },
    'New York': {
        temp: 12,
        humidity: 40,
    },
    'New Delhi': {
        temp: 33,
        humidity: 85,
    },
};

let user1 = {
    firstName: 'Paul',
    lastName: 'Jones',
    location: {
        city: 'New York',
        latitude: 40.712,
        longitude: 74.006,
    }
};

let user2 = {
    firstName: 'Mahesh',
    lastName: 'Patil',
    location: {
        city: 'Patna',
        latitude: 25,
        longitude: 40,
    }
};
// Task 1
// Draw the Object Diagram

// Task 2
// Create a function called printWeatherDetails that accepts two parameters the 
//user object and the weather object and returns a message in the following format

// CODE TEMPLATE

function printWeatherDetails(user, weather){
let name = user.firstName;
let loc = user.location.city;
let temp = weather[loc].temp;
return ("Hello " + name + " it is currently "+ temp + " degrees Celcius in " + loc);

}
console.log(printWeatherDetails(user1, weather)); 
// should print 'Hello Paul it is currently 12 degrees Celcius in New York'
console.log(printWeatherDetails(user2, weather)); 
// should print 'Hello Mahesh it is currently 32 degrees Celcius in Patna'
