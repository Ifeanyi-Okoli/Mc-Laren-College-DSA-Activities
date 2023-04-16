//One stop flight
// oneStopFlight.md
// Given a flights object where the keys are the starting point and the values are the possible 
//ending points of the journey, create a function that returns a true/false depending on 
//whether a ONE-STOP flight is possible between the source and the destination.

function checkOneStopFlight(source, destination, flightObj) {
    let sourceArr = Object.getOwnPropertyNames(flightObj);
    if (flightObj[source] === undefined) { // source not present
        return false;
    }
    else {
        let destn = flightObj[source];
        for (let i = 0; i < destn.length; i++) {
            for (let j = 0; j < sourceArr.length; j++) {
                if (destn[i] === sourceArr[j]) {
                    let newSource = flightObj[destn[i]];
                    for (let k = 0; k < newSource.length; k++) {
                        if (newSource[k] === destination) {
                            return true;
                        }
                    }
                }

            }
        }

        return false;
    }


}
let flights = {
    "BOM": ["DEL", "NYK", "SYD"],
    "DEL": ["LON", "WAS", "LAH"],
    "RPR": ["BAN", "BOM", "BRA"]
};

console.log(checkOneStopFlight("BOM", "LAH", flights));// TRUE
console.log(checkOneStopFlight("RPR", "WAS", flights));// FALSE
console.log(checkOneStopFlight("RPR", "SYD", flights));// TRUE