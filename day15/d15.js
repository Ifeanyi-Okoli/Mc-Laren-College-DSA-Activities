//Exercise : Last Three Falses to True
// lastThreeFalses.md
// Create a function that accepts a boolean array and converts the last 3 false values 
//to true. If there are less than 3 false values in the array it converts all of 
//them to true .

function lastThreeFalses(booleans){
    let count = 0;
for (i = booleans.length; i >=0; i--){
    
    if (booleans[i] === false){
        booleans[i] = !booleans[i];
        count++;
    }
    if (count === 3){
        break;
    }
}
return booleans;
}
let booleans = [true, false,true,false,true,false,false,false,true,false];
console.log(lastThreeFalses(booleans));
booleans = [false,false,true];
console.log(lastThreeFalses(booleans));