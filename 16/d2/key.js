// Keycard Alerts
// Workers in a compnary use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used. The system emits an alert if any worker uses the key-card more than once in a ten minute period.

// You are given a list of strings keyNames and keyTimes where [keyNames[i], keyTimes[i]] corresponds to a person's name and the time when their key-card was used in a single day.

// Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".

// Return a list of unique worker names who received an alert for frequent keycard use.

// Sort the names in ascending order alphabetically.

// Example 1:

// Input: keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"], keyTime = ["10:00","10:08","11:00","09:00","11:00","11:28","15:00"]
// Output: ["daniel"]
// Explanation: "daniel" used the keycard 2 times in less than 10 minutes ("10:00","10:08").

// Starter Code

function alertKeyCard(keyNames, keyTimes) {
    // write your code here
    let result = [];
    let count = 1;
    let keyTimeObj = {};
    for (let i = 0, j = 0; i < keyNames.length, j < keyTimes.length; i++, j++) {
        if (keyTimeObj[keyNames[i]] === undefined) {
            keyTimeObj[keyNames[i]] = [keyTimes[j]];
        }
        keyTimeObj[keyNames[i]].push([keyTimes[j]]);
    }
let keys = Object.keys(keyTimeObj);
// for(let key in keyTimeObj){
    
// }

for (let j = 0; j < keyTimes.length - 1; j++) {
    let prevTime = keyTimes[j];
    let currTime = keyTimes[j + 1];
    if (currTime - prevTime <= 10) {
        result.push(keys[0]);
    }

// console.log(keys);

}
return result;
}
console.log(alertKeyCard(["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"], ["10:00", "10:08", "11:00", "09:00", "11:00", "11:28", "15:00"])); // ["daniel"]
console.log(alertKeyCard(["alice", "alice", "alice", "bob", "bob", "bob", "bob"], ["12:01", "12:00", "18:00", "21:00", "21:20", "21:29", "23:00"])); // ["alice", "bob"]