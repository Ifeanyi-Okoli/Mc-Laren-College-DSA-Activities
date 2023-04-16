//Exercise : Student Object Exercise Part One
// studentObjectExercisePartOne.md
let students = [
{ name: 'Vivek', scores: [70, 90, 60, 91] },
{ name: 'Akshat', scores: [90, 80, 80, 60] },
{ name: 'Arnav', scores: [70, 60, 90, 90] },
];

//To calculate the grade obtained by the student look at below explanation.
// Average score greater than or equal to 91 -> A grade
// Average score greater than or equal to 81 -> B grade
// Average score greater than or equal to 71 -> C grade
// Average score greater than or equal to 61 -> D grade
// For other average scores -> E
// Task1 : Draw the Object Diagram for the given Array of Objects.

// Task2 : Write the code to print the name of the first student.
students[0].name;
console.log(students[0].name);
// Task3 : Write the code to print the length of the scores array for the first student.
console.log(students[0].scores.length);
// Task4 : Write the code to calculate the average score for the first student.
//(TIP: first create a variable which point to students[0].scores, then use it to 
//calculate the average)
let first = students[0].scores;
let sum = 0;
for (let i = 0; i < first.length; i++){
    sum += first[i];
}
let average = sum / first.length;
console.log(average);
// Task5 : Write the code to calculate the grade for the first student and print out 
//the name of the student followed by his grade.
if (average >= 91){
    console.log(students[0].name + " grade is " + "A grade")
}
else if (average >= 81){
    console.log(students[0].name + " grade is " + "B grade")
}
else if (average >= 71){
    console.log(students[0].name + " grade is " + "C grade")
}
else if (average >= 91){
    console.log(students[0].name + " grade is " + "D grade")
}
else {
    console.log(students[0].name + " grade is " + "E grade")
}
// Task6 : Write the code to add the calculated grade for the first student as a 
//property to the object.
students[0]["grade"] = "C grade";
console.log(students);
// Task7 : Update the Object Diagram you created in Task1 with the grade property.