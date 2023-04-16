// Exercise 4 - Index Shuffle
// Write a function that takes all even-indexed characters and odd-indexed characters from a string 
//and concatenates them together.

// To illustrate:

function indexShuffle(str){
    let edex = "";
    let odex = "";
    for (let i = 0; i < str.length; i++){
        if(i%2 === 0){
            edex += str[i];
        }
        else{
            odex += str[i];
        }
    }
    let res = edex + odex;
    return res;
}

console.log(indexShuffle("abcd")) // should return  "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)
// Examples
console.log(indexShuffle("abcdefg")) // should return "acegbdf"

console.log(indexShuffle("holiday")) // should return "hldyoia"

console.log(indexShuffle("maybe")) // should return "myeab"
// Notes
// 0 should be treated as an even number.