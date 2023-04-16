//One stop flight
// oneStopFlight.md
// Given a flights object where the keys are the starting point and the values are the possible 
//ending points of the journey, create a function that returns a true/false depending on whether 
//a ONE-STOP flight is possible between the source and the destination.

function checkOneStopFlight(source,destination,flightObj){

     if(flightObj[source] === undefined){ // source not present
          return false;
     } 
     else{
      let destn = flightObj[source];
      for (i = 0; i < destn.length; i++){
          if (destn[i] === destination){
              return true;
          }
      }
      return false;
     }
}
let flights= {
     "BOM" : ["DEL", "NYK", "SYD"],
     "DEL" : ["LON", "WAS", "LAH"],
     "RPR" : ["BAN", "BOM", "BRA"]
     };
console.log(checkOneStopFlight("BOM", "LAH",flights));// TRUE
console.log(checkOneStopFlight("RPR", "WAS",flights));// FALSE
console.log(checkOneStopFlight("RPR", "SYD",flights));// TRUE