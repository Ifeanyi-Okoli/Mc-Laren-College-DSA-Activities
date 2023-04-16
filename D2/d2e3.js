//Exercise 3 - Chat Room Status
// Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".
// For example, if there are 5 users, return:

// "user1, user2 and 3 more online"
// Examples
function chatroomStatus(arr) {
    let n = arr.length;
    if (n === 0) {
        return "no one online";
    }
    if (n === 1) {
        return arr[0] + " online";
    }
    if (n === 2) {
        return arr[0] + " and " + arr[1] + " online"
    }
    if (n > 2) {
        return arr[0] + ", " + arr[1] + " and " + (n - 2) + " more online"
    }
}


console.log(chatroomStatus([])); // should return "no one online"

console.log(chatroomStatus(["paRIE_to"])); // should return "paRIE_to online"

console.log(chatroomStatus(["s234f", "mailbox2"])); // should return "s234f and mailbox2 online"

console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]))
// should return "pap_ier44, townieBOY and 4 more online"
