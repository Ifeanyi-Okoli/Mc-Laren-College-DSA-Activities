// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  let arr = str.split("");
  let arr2 = [];
  let arr1 = arr.reverse();
  //console.log(arr1);
  for (let i = 0; i < arr1.length; i++) {
    if (isNaN(parseInt(arr1[i]))) {
      arr2.push(arr1[i]);
    }
  }
  return arr2.filter(alph => /[a-zA-Z]/.test(alph))
             .join('');  
}

console.log(reverseLetter("krishan"))//,"nahsirk"

console.log(reverseLetter("ultr53o?n"))//,"nortlu"

console.log(reverseLetter("ab23c"))//,"cba"

console.log(reverseLetter("krish21an"))//,"nahsirk"