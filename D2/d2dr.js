//Part 1
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
function average(num1, num2) {
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

function addGrade(student, semester) {
    let score = student.scores;
    let sum = 0;
    let freq = score.length;
    for (let i = 0; i < score.length; i++) {
        sum = sum + score[i][semester - 1];
    }
student["semester" + semester + "_grade"] = average(sum, freq);
//console.log(student);
}

let student1 = { name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]] };

addGrade(student1, 2);
addGrade(student1, 1); // since the semester value is 2 the scores will be 100, 80, 100 and 60 so adding them gives 340. 
// So the average value will be 85. And Hence the grade is `B`. So we will add the property `semeseter2_grade` with the value `B`.

console.log(student1); // should print{ name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]], semeseter2_grad