//Exercise: Pass 3 of 4 Subjects
// pass3Of4Subjects.md
// A student's scores for each of the 4 subjects are given.

// Given that the passing score for each of the subjects is 70, 
//create a boolean variable named didPassCourse.

// The value of didPassCourse will be true if the student passes atleast 3 of the 4 subjects 
//and false otherwise.

// CODE TEMPLATE

let historyScore = 0;
let mathsScore = 0;
let englishScore = 90;
let scienceScore = 75;
let passingScore = 70;
let didPassCourse;
let count = 0;
passingScore < historyScore ? count++ : false;
passingScore < mathsScore ? count++ : false;
passingScore < englishScore ? count++ : false;
passingScore < scienceScore ? count++ : false;
didPassCourse = count >= 3 ? true : false;
if(didPassCourse){
console.log("Passed");
}
else{
console.log("Failed");
}