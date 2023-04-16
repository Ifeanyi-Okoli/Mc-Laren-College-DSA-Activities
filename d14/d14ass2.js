// Exercise 2 - File Treasure hunt
// Sometimes some annoying students decide to mess around by creating horrible 
// amalgamations of nested folders in shared directories. Sometimes they'll even 
//stick a file in there as a sort of tedious file explorer "treasure hunt". 
//In this challenge, you'll have to search through a 
//virtual filesystem of sorts to find a file, then return the path to the file.

// Sometimes there might not be a file in the filesystem. In that case, just 
//return undefined. You're always guaranteed to receive a filesystem with either 
//one or zero files.

// Examples
function search(obj) {
  let res = "";
  for (let key in obj) {
    
    if (obj[key] !== 0) {
      res += key + "/";
   
      for (let i in obj[key]) {
        res += i + "/";
        // console.log (res);
        if (obj[key][i] !== {}) {
          for (let j in obj[key][i])
          res += obj[key][i][j]+ "/";
            return res;
        }
      }
    }
  }
  // return obj[]
}
let files = {
  'New folder': {
    'New folder': {}
  },
  'New folder (1)': {
    'New folder': {
      'funnyjoke.txt': 'lol i pranked you!!!'
    }
  },
  'New folder (2)': {}
};

// console.log(files['New folder (1)']['New folder']['funnyjoke.txt']);

console.log(search(files)); // should return "New folder (1)/New 
//folder/funnyjoke.txt"
// HINT: Use recursion to solve this problem


//or

function search(files, path = '') {

  if (typeof files === 'string')
    return path.slice(1);

  for (let folder in files)
    try {
      return search(files[folder], path + '/' + folder);
    }
    catch(e) {}

  throw new Error('No files!');

}