function checkDirectFlight(source, destination, flightObj) {
    if(flightObj[source] === undefined){ // source not present
         return false;
    }
    else{
       let dests = flightObj[source];
       for (i = 0; i < dests.length; i++){
           if(destination === dests[i]){
               return true;
           }
       }
       return false;
    }
}
let flights = {
    "BOM": ["DEL", "SYD"],
    "DEL": ["LON", "WAS", "LAH"],
    "RPR": ["BAN", "DUB", "BRA", "WAS"]
};
console.log(checkDirectFlight("BOM", "SYD", flights));// TRUE
console.log(checkDirectFlight("RPR", "WAS", flights));// TRUE
console.log(checkDirectFlight("LON", "WAS", flights));// FALSE
