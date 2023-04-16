// Part 2
// You are given several students' score for two different semesters.

// Calculate the grade for the student for the given semester and add it as a property like 
//'semester1_grade' or semester2_grade based on the given semester value. Make use of the function 
//you wrote in previous exercise.
// Grade A - avg score greater then 90
// Grade B - avg score greater than 80
// Grade C - avg score greater than 70
// Grade D - avg score greater than 60
// Grade E - avg score greater than 50
// Grade F - otherwise
// For e.g. for the following student, if we want to calculate grade of semester 2
function addgrade(num1, num2) {
    let avg = num1 / num2;
    if (avg > 90) {
        return "A";
    }
    if (avg > 80) {
        return "B";
    }
    if (avg > 70) {
        return "C";
    }
    if (avg > 60) {
        return "D";
    }
    if (avg > 50) {
        return "E";
    }
    else {
        return "F";
    }
}

function addGrades(student, semester) {
    let sum = 0;
    let score;
    for (let j = 0; j < student.length; j++) {
        score = student[j].scores;
        for (let i = 0; i < score.length; i++) {
            sum = sum + score[i][semester - 1];
        }
        student[j]["semester1_grade"] = addgrade(sum, score.length);
    }
    console.log(students);
}


let students = [
    { name: 'Vivek', scores: [[70, 60], [90, 100], [60, 80], [91, 59]] },
    { name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]] },
    { name: 'Arnav', scores: [[70, 40], [60, 60], [90, 100], [90, 90]] },
    { name: 'Pawan', scores: [[80, 80], [90, 60], [90, 40], [70, 80]] }
];

addGrades(students, 1); // should add `semester1_grade` property to each student