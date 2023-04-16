//We all want to climb the leaderboard. Even given some of the massive scores on there, it's nice to know how close you are...

// In this kata you will be given a username and their score, your score (not your real score) and you need to calculate how many kata you need to complete to beat their score, by 1 point exactly.

// As this is the easy version (harder one to folow at some point in the future), let's assume only Beta kata and 8kyu kata are available. Worth 3 and 1 point respectively.

// Return a string in this format: "To beat <user>'s score, I must complete <x> Beta kata and <y> 8kyu kata."

// If the total number of kata you need to complete >1000, add "Dammit!" to the end of the string, like so: "To beat <user>'s score, I must complete <x> Beta kata and <y> 8kyu kata. Dammit!"

// If your score is higher than the user's already, return "Winning!" and if they are equal, return "Only need one!"

// Note: You are looking to complete as few kata as possible to get to your target.

function leaderB(user, user_score, your_score){
    let scoreBal = user_score - your_score;
    if (scoreBal < 0){
        return "Winning";
    }
    else if (scoreBal === 0){
        return "Only need one!";
    }
    else{
        let a = Math.floor(scoreBal/3);
        let b = scoreBal%3;
        if (scoreBal > 1000){
            return ("To beat " + user + "'s score, I must complete " + a + " Beta kata and " + b + " 8kyu kata. Dammit!")
        }
        else{
        return ("To beat " + user + "'s score, I must complete " + a + " Beta kata and " + b + " 8kyu kata.")
    }
}
}
console.log(leaderB('g964', 36097, 20000));//, "To beat g964's score, I must complete 5365 Beta kata and 2 8kyu kata. Dammit!"
console.log(leaderB('GiacomoSorbi', 23914, 23867)); //, "To beat GiacomoSorbi's score, I must complete 15 Beta kata and 2 8kyu kata."
console.log(leaderB('ZozoFouchtra', 15991, 12000)); //, "To beat ZozoFouchtra's score, I must complete 1330 Beta kata and 1 8kyu kata. Dammit!"
console.log(leaderB('webtechalex', 884, 900)); //, 'Winning!'
console.log(leaderB('petegarvin1', 3307, 100)); //, "To beat petegarvin1's score, I must complete 1069 Beta kata and 0 8kyu kata. Dammit!"
console.log(leaderB('myjinxin2015', 15720, 15720));//, 'Only need one!'


// Testing for DpddVr, 7316 and 4863
// Testing for JILc, 18627 and 16986
// Testing for NkRmWAC, 6993 and 4934
// Testing for Oor, 4874 and 3644
// Testing for TUdiW, 19835 and 18120