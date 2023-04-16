// Text Twist
// In Text Twist, players try to score points by forming words using the letters from a 
//6-letter scrambled word. They win the round if they can successfully unscramble the 6-letter
// word. Create a function that takes in an array of already-guessed words, the unscrambled 
//6-letter word and returns the total number of points the player scored in a particular 
//round using the following rubric:

// 3-letter words are 1 pt
// 4-letter words are 2 pts
// 5-letter words are 3 pts
// 6-letter words are 4 pts + 50 pt bonus (for unscrambling the word) Remember that invalid words (words that cannot be formed from the 6-letter unscrambled words) count as 0 pts.
// Examples

function getPoints(i, str) {
    let totalPoints = 0;
    
    
    
    
    if (i === str) {
        totalPoints = totalPoints + 4 + 50;
        return totalPoints;
    }

    for (let j = 0; j < i.length; j++) {
        if (!(str.includes(i[j]))) {
            totalPoints = totalPoints + 0;
            return totalPoints;
        }
    }
    if (i.length === 3) {
        totalPoints = totalPoints + 1;
    }
    else if (i.length === 4) {
        totalPoints = totalPoints + 2;
    }
    else if (i.length === 5) {
        totalPoints = totalPoints + 3;
    }
    else if (i.length === 6) {
        if(str.includes(i)){
        totalPoints = totalPoints + 4;
        }
    }
    // console.log(totalPoints)
    return totalPoints;
}

function totalPoints(arr, str) {
    let points = 0;
    for(let k of arr){
        let l = k.length;
        // let condition = true;
        for (let i = 0; i < l; i++) {
            if (!str.includes(k[0])) {
                points = points + 0;
            }
            else{
                
            }
                return points;
    }
   
        }
        points = points + getPoints(arr[i], str);
        if(arr[i].length === 6 && str.includes(arr[i]) && arr[i].includes(str)){
            points = points+4;
        }
        for(let j = 0; j < arr[i].length; j++){
            if(!str.includes(arr[i][j])){
                points = 0;
            }
        }
    }
    
    return points;
}

console.log(totalPoints(["cat", "create", "sat"], "caster")); // 2
// Since "create" is an invalid word.

console.log(totalPoints(["trance", "recant"], "recant")); // 58
// // "trance" scores 54 pts, while "recant" scores only 4 because it is the same word as the input.

console.log(totalPoints(["dote", "dotes", "toes", "set", "dot", "dots", "sted"], "tossed")); // 13
// Since 2 + 3 + 2 + 1 + 1 + 2 + 2 = 13



console.log(totalPoints(["cat","catac", "create", "sat"], "caster"))//.toBe(2);
console.log(totalPoints([], "caster"))//.toBe(0);
console.log(totalPoints(["ttt"], "tenant"))//.toBe(0);

// Notes
// If a 6-letter word has multiple anagrams, count each 6-letter unscramble as an additional 54 pts.