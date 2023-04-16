// Exercise 4 - Oddly or Evenly Positioned
// Create a function that returns the characters from an array or string r 
//on odd or even positions, depending on the specifier s. The specifier will
// be "odd" for items on odd positions (1, 3, 5, ...) and "even" for items 
//on even positions (2, 4, 6, ...).

// Examples:

function even(arst) {
    let arrResult = [];
    let strResult = "";
    for (let i = 1; i < arst.length; i = i + 2) {
        if ((typeof arst) === "string") {
            strResult = strResult + arst[i];
        }
        else if ((typeof arst) === "object") {
            arrResult.push(arst[i]);
        }
    }
    if ((typeof arst) === "string") {
        return strResult;
    }
    return arrResult;
}

function odd(arst) {
    let arrResult = [];
    let strResult = "";
    for (let i = 0; i < arst.length; i = i + 2) {
        if ((typeof arst) === "string") {
            strResult = strResult + arst[i];
        }
        else if ((typeof arst) === "object") {
            arrResult.push(arst[i]);
        }
    }
    if ((typeof arst) === "string") {
        return strResult;
    }
    return arrResult;
}


function charAtPos(r, s) {
    // let arrResult = [];
    // let strResult = "";
    if (s === "even") {
        return even(r);
    }
    if (s === "odd") {
        return odd(r);
    }

}

console.log(charAtPos([2, 4, 6, 8, 10], "even")) //➞ [4, 8]
// 4 & 8 occupy the 2nd & 4th positions

console.log(charAtPos("EDABIT", "odd")) //➞ "EAI"
// "E", "A" and "I" occupy the 1st, 3rd and 5th positions

console.log(charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd")) //➞ ["A", "B", "T", "A", "I", "Y"]
// Note:
// Arrays are zero-indexed, so, index+1 = position or position-1 = index.