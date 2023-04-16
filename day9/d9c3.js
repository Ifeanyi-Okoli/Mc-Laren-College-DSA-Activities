// Exercise : User Object Diagram
// userObjectDiagram.md
// Draw the object diagram for the given array
let userA = [
  22,
  false,
  "vivek",
  "India",
  ["Hiking", "Fishing", "Reading"],
  [
    [72, 60],
    [88, 20],
    [50, 36],
  ],
];
// Task1 : Write the code to increase age (22) by 1
userA[0] += 1;

// Task2 : Add new hobby "Swimming" to Hobby Array
userA[4][3] = "swimming";
console.log(userA);

// Task3 : Create a locations variable and point it to the last element of userA
let locations = userA[5];

// Task4 : Using the loctions variable, add a new location [50,70] to that array
locations[3] = [50, 70];

// Task5 : For the first location, increment the longitude value from 60 to 61.
locations[0][1] += 1;
console.log(userA);




