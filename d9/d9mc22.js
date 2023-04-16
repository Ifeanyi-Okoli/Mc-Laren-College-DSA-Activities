function sortContacts(arr, str){
    let obj = {}
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let name = arr[i].split(" ");
        let sName= name[1];
        // console.log(sName);
        if (!(obj.hasOwnProperty(sName))){
            obj[sName]=arr[i];
        }

    }
    

    let obj1 = Object.keys(obj).sort().reduce(
        (i, key) => { 
          i[key] = obj[key]; 
          return i;
        }, 
        {}
      );
    //   console.log(obj1);
for (key in obj1){
    // console.log(obj1[key]);
    result.push(obj1[key]);
}
if(str === "DESC"){
  let reversed = result.reverse();
  return reversed;
}
return result;
}

console.log(sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC"));

console.log(sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "DESC"));
/*
"John Locke",
        "David Hume",
        "Rene Descartes",
        "Thomas Aquinas"]));
*/

// should return [
//   "Thomas Aquinas",
//   "Rene Descartes",
//   "David Hume",
//   "John Locke"
// ]
// Tip
// You can use the less-than and greater-than operators to compare two strings 
//as described here

//check local compare

/*


let a = 'a'
let b = 'b'
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

*/