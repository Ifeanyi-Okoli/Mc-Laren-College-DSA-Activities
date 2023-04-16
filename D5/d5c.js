// Part 1
//Write a function (filterStudents) that accepts a filtering function and returns a 
//list of students objects that match the filter.


// Part 2
// Call the filterStudents function to get a list of students aged above 23.
// Call the filterStudents function to get a list of students who are from Mumbai.
// Call the filterStudents function to get a list of students who are marvel fans.
// Call the filterStudents function to get a list of students whose names starts with A.
// Starter Code

// Part 1
function filterStudents(students, filterFunction) {
   let filteredList = [];
   for (let student of students){
       if(filterFunction(student)){
        filteredList.push(student)
       }
   }
   return filteredList;
}
let isAbove23 = (student) => student.age>23;
let isFromMumbai = (student) => student.location=== "Mumbai";
let isMarvelFan = (student) => student.isMarvelFan;
let isNameStartingWithA = (student) => student.name.startsWith("A");


// Write solution of Part 2 below
let students = [
    {name: 'Raj', age: 18, location:'Delhi',isMarvelFan: true},
    {name: 'Kumar', age: 25, location:'Mumbai',isMarvelFan: true},
    {name: 'John', age: 21, location:'Kolkata',isMarvelFan: false},
    {name: 'Tom', age: 29, location:'Chennai',isMarvelFan: true},
    {name: 'Brad', age: 23, location:'Mumbai',isMarvelFan: false},
    {name: 'King', age: 31, location:'Mumbai',isMarvelFan: false}
];
// You can write any helper code below this line


// 2.1
let studentsAbove23 = filterStudents(students, isAbove23); // Call the function here by passing 'students' and your helper function


// 2.2
let studentsFromMumbai = filterStudents(students, isFromMumbai); // Call the function here by passing 'students' and your helper function


// 2.3
let studentsWhoAreMarvelFans = filterStudents(students, isMarvelFan); // Call the function here by passing 'students' and your helper function

// 2.4
let studentsWithLetterANames = filterStudents(students, isNameStartingWithA); // Call the function here by passing 'students' and your helper function

console.log(studentsAbove23);
console.log(studentsFromMumbai);
console.log(studentsWhoAreMarvelFans);
console.log(studentsWithLetterANames);