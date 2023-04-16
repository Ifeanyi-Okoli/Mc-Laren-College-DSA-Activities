// Challenge 1 - Coin Toss
// In this challenge you will be given an integer n, which is the number of times that is thown a coin. You will have to return an array of string for all the possibilities (heads[H] and tails[T]).

// Examples

function coin(n){
    let result = [];
    let sides = ["H", "T"];
if(n===1) return sides;
if(n === 2){
    for(let i = 0; i < sides.length; i++){
        for(let j = 0; j < sides.length; j++){
            let curr = sides[i]+sides[j];
            result.push(curr);
        }
    }
}
if(n === 3){
    for(let i = 0; i < sides.length; i++){
        for(let j = 0; j < sides.length; j++){
            for(let k = 0; k<sides.length; k++){
                let curr = sides[i]+sides[j]+sides[k];
            result.push(curr);
            }
            
        }
    }
}

return result;
}


console.log(coin(1)); //  should return ["H", "T"]
console.log(coin(2)); //  should return ["HH", "HT", "TH", "TT"]
console.log(coin(3)); //  should return ["HHH", "HHT", "HTH", "HTT", "THH", "THT", "TTH", "TTT"]
// When finished sort them alphabetically.

// Careful with performance!! You'll have to pass 3 basic test (n = 1, n = 2, n = 3), many medium tests (3 < n <= 10) and many large tests (10 < n < 18)