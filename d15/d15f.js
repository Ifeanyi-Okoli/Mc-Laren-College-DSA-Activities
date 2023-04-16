function rollDiceHelper(n = 1, result = [], output = [[]]) {
    if(n <= 0){
        output.push(result)
        return output;
    }
    for (let i = 1; i <= 6; i++) {
        let pickedChoice = i;

        result.push(pickedChoice);
        output = rollDiceHelper(n - 1, result, output);
        // console.log(result, tempOutput);
        // output = output.concat(tempOutput);

        result.pop()
    }
    return output;
}


function rollNDice(n) {
    return rollDiceHelper(n, [], [])
}

console.log(rollNDice(3));



/*

for (all choices) :
    if (isValidChoice(val, n)) : // so that we don't chose something which will definitely not yield a result.
        applyValue(val, n); //chose the current one
        findSolutions(n+1, other params); //explore all other possible combination with current chosen one.
        removeValue(val, n); // remove current chosen and go for next.

        */