//Check Direct Flight
// checkDirectFlight.md
// Given a flights object where the keys are the starting point and the values are the possible 
//ending points of the journey, create a function that returns a true/false depending on 
//whether a direct flight is possible between the source and the destination.

// CODE TEMPLATE

function checkDirectFlight(source,destination,flightObj){
    let destinationArr = flightObj[source];
    if (destinationArr === undefined){
        return false;
    }
}
let flights= {
     "BOM" : ["DEL", "SYD"],
     "DEL" : ["LON", "WAS", "LAH"],
     "RPR" : ["BAN", "DUB", "BRA", "WAS"]
     };
console.log(checkDirectFlight("BOM", "SYD", flights));// TRUE
console.log(checkDirectFlight("RPR", "WAS", flights));// TRUE
console.log(checkDirectFlight("LON", "WAS", flights));// FALSE