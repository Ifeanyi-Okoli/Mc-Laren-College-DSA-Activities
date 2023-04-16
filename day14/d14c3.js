//Exercise : User Object Manipulation
// userObjectManipulation.md
// Given the below object

// CODE TEMPLATE

let user = {
  age: 22,
  hasVoted: false,
  name: "vivek",
  location: "India",
  hobbies: ["dance", "music"],
};
console.log(user);

// Task0 : Draw the Object Diagram for the above Object. Here is a sample Object Digram for 
//your reference.

// Task1 : create a variable and write the code to store the second element of the hobbies 
//array into it.
let hobbiesArray = user["hobbies"];
let hobby = hobbiesArray[1]
console.log (hobby);

// Task3 : Write the code to add a new property 'favouriteSubjects' to the object and add 'Maths', 
//'Physics' and 'Chemistry' as the values.
user["favouriteSubjects"] = ['Maths', 'Physics', 'Chemistry'];
console.log(user);
// Task4 : Write the code to add a new hobby "swimming" to the hobbies array.
hobbiesArray[2] = "swimming";
console.log(user);