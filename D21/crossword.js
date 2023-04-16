// CrossWord Search
// This challenge involves finding words in an 8x8 grid.

// Given a string of 64 letters and a string of words to find. Convert the string to an 8x8 array, and return true if all words in the string can be found in the array. Return false otherwise. Words can be read in any direction i.e (horizontally, vertically or diagonally).

// Example
letters = "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY";


function bfsHelper(str, grid, row = 0, col=0){
    let isValid = (nextRow, nextCol, currWord) => nextRow>=0 && nextRow < grid.length && nextCol >= 0 && nextCol <grid[0].length && str.startsWith(currWord+grid[nextRow][nextCol]);    
    let offsets = [[-1,0], [0,1], [1,0], [0,-1], [-1,-1], [1,-1], [1,1], [-1,1]];
    
    let queue =[];
   queue.push([row, col, grid[row][col], null])
   
   while (queue.length!==0){
    let [currRow, currCol, currWord, currOffset] = queue.shift();
    if (currWord===str) return true;
    if (currOffset !== null){
      let [nextRow, nextCol] = [currRow + currOffset[0], currCol + currOffset[1]];
        if(isValid(nextRow, nextCol, currWord)){
          queue.push([nextRow, nextCol, currWord+grid[nextRow][nextCol],currOffset])
        }
    }
    else{
      
      for(let offset of offsets){
        let [nextRow, nextCol] = [currRow + offset[0], currCol + offset[1]];
        if(isValid(nextRow, nextCol, currWord)){
          queue.push([nextRow, nextCol, currWord+grid[nextRow][nextCol],offset])
        }
      }
    }
   }
   return false;
}


function containAllWords(grid, words) {
  for (let i = 0; i < words.length;i++){
      result = bfsHelper(words[i], grid);
  }
  return result;
}
// The grid formed from the given letters string is shown below.

let grid = [
  ["P", "S", "U", "W", "H", "A", "T", "S"],
  ["L", "P", "A", "C", "K", "A", "G", "E"],
  ["N", "Y", "O", "L", "R", "D", "V", "L"],
  ["F", "I", "N", "G", "E", "Z", "B", "M"],
  ["I", "R", "E", "H", "Q", "N", "J", "O"],
  ["A", "T", "B", "V", "G", "Y", "E", "S"],
  ["J", "D", "U", "W", "U", "E", "S", "T"],
  ["P", "S", "T", "I", "C", "K", "E", "Y"]
]

let words = ["stick", "most", "key", "vein", "yes", "package", "tube", "target", "elm", "spy"];
// You would return true as all words can be found.

// Below is the matrix showcasing the position for all the found words, you just have to return true if all the words are found else return false.

[
  ["_", "S", "_", "_", "_", "_", "T", "_"],
  ["_", "P", "A", "C", "K", "A", "G", "E"],
  ["N", "Y", "_", "_", "R", "_", "_", "L"],
  ["_", "I", "_", "G", "_", "_", "_", "M"],
  ["_", "_", "E", "_", "_", "_", "_", "O"],
  ["_", "T", "B", "V", "_", "Y", "E", "S"],
  ["_", "_", "U", "_", "_", "E", "_", "T"],
  ["_", "S", "T", "I", "C", "K", "_", "_"]
]
// Notes
// Words that we are looking for must be contained inside the grid, without wrapping over columns/rows.

console.log(containAllWords(grid, words));