// Implement the `guessTheNumberGame` function using prompt, and alert as explained in class.
// The user should have 5 attempts to guess the number chosen by computer.
// After every guess you should give feedback whether `guess was smaller` or `guess was larger`
// If user is not able to guess the number, say "you lose, I was thinking of X"

// Part 1
/*
Breakdown the game into atleast 3 parts that you would complete to buid this game.
For eg: Part 1 can be to take the user input from browser and print it in console.
*/

//Part 2
function guessTheNumberGame() {

    let X = Math.round(Math.random() * 100);
    let count = 5;
    while (count > 0) {
        let input = prompt("Please guess a number between 1 and 100", "100");
        if (parseInt(input) === X) {
            alert("Hooray! you won");
            return "😊";
        }
        if (parseInt(input) < X) {
            alert("guess was smaller");
            count--;
        }
        else   if (parseInt(input) > X) {
            alert("guess was larger");
            count--;
        }
    }
    alert("you lose, I was thinking of " + X);
    return "🥵"
}
guessTheNumberGame();