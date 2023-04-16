// You are given an array called trips each element of this array is 
//trips[i] = [kms_travelled, fuel_used].

// Part 1
// Sort the trips according to distance travelled.

let trips = [[155, 14], [224, 17], [31, 3], [441, 21], [105, 8]];
function compare(trip1, trip2){
    return trip1[0] - trip2[0];
}

let sortedTrips = trips.sort(compare);// Final answer here
console.log(sortedTrips);

// Part 2
// Use reduce to find the average fuel economy (km/l). For any trip the fuel economy is 
//distance/fuel used. Store the answer in avgFuelEconomy variable.
function calculateAverage(acc, trip){
  let tripEconomy = trip[0]/trip[1];
  acc += tripEconomy;
  return acc;
}

let avgFuelEconomy = trips.reduce(calculateAverage, 0)/ trips.length;
console.log(avgFuelEconomy);