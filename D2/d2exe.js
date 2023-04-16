// Part 1
// Write a function which takes in a student object as shown and adds an appropriate grade for the 
//given semester.

// Here is how grades are alloted:

// Grade A - avg score greater then 90
// Grade B - avg score greater than 80
// Grade C - avg score greater than 70
// Grade D - avg score greater than 60
// Grade E - avg score greater than 50
// Grade F - otherwise
// For e.g. for the following student, if we want to calculate grade of semester 2

function getGrade(num) {
    if (num > 90) {
        return "A";
    }
    else if (num > 80) {
        return "B";
    }
    else if (num > 70) {
        return "C";
    }
    else if (num > 60) {
        return "D";
    }
    else if (num > 50) {
        return "E";
    }
    else {
        return "F";
    }
}

function addGrade(student, semester) {
    let totalScores = 0;
    for (let i = 0; i < student.scores.length; i++) {
        totalScores += student.scores[i][semester - 1];
    }
    let average = totalScores / student.scores.length;
    let grade = getGrade(average);
    student["semester" + semester + "_grade"] = grade;
}

let student1 = { name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]] };

addGrade(student1, 2); // since the semester value is 2 the scores will be 100, 80, 100 and 60 so 


console.log(student1); // should print{ name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]], semeseter2_grade: 'B' };
//Part 2



function addGrades(student, semester) {
    let sum = 0;
    let score;
    for (let j = 0; j < student.length; j++) {
       addGrade(student[j], semester)
    //     score = student[j].scores;
    //     for (let i = 0; i < score.length; i++) {
    //         sum = sum + score[i][semester - 1];
    //     }
    //     student[j]["semester1_grade"] = addgrade(sum, score.length);
    }
    return student;
}

let students = [
  { name: 'Vivek', scores: [[70, 60], [90, 100], [60, 80], [91, 59]] },
  { name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]] },
  { name: 'Arnav', scores: [[70, 40], [60, 60], [90, 100], [90, 90]] },
  { name: 'Pawan', scores: [[80, 80], [90, 60], [90, 40], [70, 80]] }
];

addGrades(students, 1); 
console.log(students[2]); // should add `semester1_grade` property to each student