// Exercise 1 - Zip It, If You Can?
// Given an array of women and an array of men, either:

// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return a array of pairs, with the first woman paired with the first man, 
//second woman paired with the second man, etc.
// Examples
function zipIt(arr, arr1){
    let result = [];
    if (arr.length !== arr1.length){
        return "sizes don't match";
    }
    for(let i = 0; i<arr.length; i++){
        result.push([arr[i], arr1[i]]);
    }
    return result;
}

console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));
 // should return [["Elise", "John"], ["Mary", "Rick"]]

 console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));
 // should return "sizes don't match"

 console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));
 // should return [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]