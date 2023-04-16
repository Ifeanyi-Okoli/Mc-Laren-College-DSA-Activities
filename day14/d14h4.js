//movieRatingPart1.md
// Movie Rating Part 1
// Write a function addPopularity which takes in a movie object and adds a new property 
//isPopular to it, and sets it to true if it contains three ratings greater than or 
//equal to 8, else it is set to false.

function addPopularity(movie){
movie["isPopular"];
let arr = movie["ratings"];
let count = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 8){
        count++;
    }
}
if (count >= 3){
    movie["isPopular"] = true;
}
else{
    movie["isPopular"] = false;
}
console.log(movie["name"]);
console.log(movie["ratings"]);
console.log(movie["isPopular"]);
return movie;
}

let movie = {
  "name" :"A",
  "ratings" : [5, 8, 9, 10, 2, 8]
};
addPopularity(movie); 
console.log(movie); 
/* should print
{
  "name" :"A",
  "ratings" : [5, 8, 9, 10, 2, 8],
  "isPopular": true
}
*/