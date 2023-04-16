//Full Name from Object
// getFullName.md
// Write a function that returns the 'full name' of the given user from the userObject.

function getFullName(userObj){
return user["full name"];
}
let user = {
  age: 22,
  hasVoted: false,
  name: "vivek",
  location: "India",
  hobbies: ["dance", "music"],
  "full name": "vivek kumar",
};
console.log(getFullName(user));