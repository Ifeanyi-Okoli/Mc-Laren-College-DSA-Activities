letters = "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY";
words = ["stick", "most", "key", "vein", "yes", "package", "tube", "target", "elm", "spy"];

// function check(str, grid){
//     let isValid = (nextRow, nextCol) => nextRow>=0 && nextRow < matrix.length && nextCol >= 0 && nextCol <matrix[0].length && !visited[nextRow][nextCol];

//     let offsets = [[-1,0], [0,1], [1,0], [0,-1]];
//     let d = str.length; 
//     let stack =[];
//     let i = 0;
//    while (i < d){
//     stack.push(str[i]);
     
//    }

// }

// function containAllWords(letters, words) {
//     for (let i = 0; i < words.length;i++){
//         result = check(words[i], grid);
//     }
//   }
  // The grid formed from the given letters string is shown below.
  
  function crosswordSolver(words, grid) {
    let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    let checked = [];
    for (word of words) {
      let found = false;
      for (let i = 0; i < 8 && !found; i++) { // <-- extra exit condition
        for (let j = 0; j < 8 && !found; j++) { // <-- ... also here.
          if (grid[i][j] == word[0]) { // Simple check for 1st char
            for (let [dx, dy] of directions) { // Four directions to scan.
              found = true;
              for (let k = 0, x = i, y = j; k < word.length; k++, x+=dx, y+=dy) {
                if (x < 0 || y < 0 || x > 7 || y > 7 || word[k] !== grid[x][y]) {
                  found = false; // Out of bounds, or mismatch
                  break;
                }
              }
              if (found) break;
            }
          }
        }
      }
      if (found) checked.push(word);
    }
    console.log(checked);
  }


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

  crosswordSolver(words, grid)