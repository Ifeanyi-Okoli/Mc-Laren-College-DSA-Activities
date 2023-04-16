// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
   let arr =  str.split(" ");
   let arr1 = [];
   let res;
   let res1;
   for (let i = 0; i < arr.length; i++){
       arr1.push(arr[i].split(""));
   }
  for (let j = 0; j < arr1.length; j++){
      res = arr1.map(x=> (x.reverse()));
      //res = arr1[j].join("")
         }    
         for (let k = 0; k < res.length; k++){
            res[k].join("");
            res[k].join(",");
               }   
        return res.join(" ");
  }

  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));//, 'ehT kciuq nworb xof spmuj revo eht yzal .god'
  console.log(reverseWords('apple'));//, 'elppa'
  console.log(reverseWords('a b c d'));//, 'a b c d'
  console.log(reverseWords('double  spaced  words'));//, 'elbuod  decaps  sdrow'