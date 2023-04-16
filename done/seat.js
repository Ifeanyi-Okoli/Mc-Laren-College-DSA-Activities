//Group Seats
// groupSeats.md
// Movie Theater Seating

// A group of n friends are going to see a movie. They would like to find a spot where they can 
//sit next to each other in the same row. A movie theater's seat layout can be represented as a 
//2-D matrix, where 0s represent empty seats and 1s represent taken seats.

// [[1, 0, 0, 0, 1, 1, 1],
// [1, 1, 1, 0, 1, 1, 1],
// [1, 0, 1, 0, 1, 0, 1],
// [1, 1, 0, 1, 1, 0, 1],
// [1, 0, 1, 1, 1, 1, 1],
// [1, 0, 1, 1, 0, 0, 0]]
// Create a function that, given a seat layout and the number of friends n, returns the number of 
//available spots for all n friends to sit together.

// In the above example, if n = 3, there would be 2 spots (the first row and last row).

function groupSeats(theatre,friends){
    let count = 0;
for (let i = 0; i < theatre.length; i++){
    for (let j = 0; j < theatre[i].length; j++){
      if(friends === 2){
        if(theatre[i][j] === theatre[i][j+ friends - 1] && theatre[i][j] === 0){
          count++;
        }
      }  
      if(friends === 3){
        if(theatre[i][j] === theatre[i][j+ friends - 1] && theatre[i][j] === theatre[i][j+ friends - 2] && theatre[i][j] === 0){
          count++;
        }
      }  
      if(friends === 4){
        if(theatre[i][j] === theatre[i][j+ friends - 1] && theatre[i][j] === theatre[i][j+ friends - 2] && theatre[i][j] === theatre[i][j+ friends - 3] && theatre[i][j] === 0){
          count++;
        }
      }  
    }
}
return count;
}


console.log(groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 0]
], 2));// 3

console.log(groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
], 4)); //2

console.log(groupSeats([
  [0, 0, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
], 2)); //7