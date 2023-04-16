//Exercise : Student Object Exercise Part2
// studentObjectExercisePart2.md
// Task1
// Write a function getStudentGrade which takes in a student object and returns the 
//grade for that student.

// Example

function getStudentGrade(student){
    let sum= 0;
    for (let i =0; i < student["scores"].length; i++){
        sum += student["scores"][i];
    }
    let average = sum / student["scores"].length;
    if (average >= 91){
        let grade = "A grade";
    }
    else if (average >= 81){
        grade = "B grade";
    }
    else if (average >= 71){
        grade = "C grade";
    }
    else if (average >= 91){
        grade =  "D grade";
    }
    else {
        grade = "E grade";
    }
    return grade;
}

console.log(getStudentGrade({ name: 'Vivek', scores: [70, 90, 60, 91] })); // should print A
console.log(getStudentGrade({ name: 'Akshat', scores: [90, 80, 80, 60] })); // should print B

// To calculate the grade obtained by the student look at below explanation.
// Average score greater than or equal to 91 -> A grade
// Average score greater than or equal to 81 -> B grade
// Average score greater than or equal to 71 -> C grade
// Average score greater than or equal to 61 -> D grade
// For other average scores -> E
// Task2
// Write a function addGrades which takes in an array of student objects and adds 'grade' 
//as the new property to each student object which stores the calculated grade.

function addGrades(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i]["grade"] = getStudentGrade(arr[i]);
    }
    console.log(arr);
}

let students = [
 { name: 'Vivek', scores: [70, 90, 60, 91] },
 { name: 'Akshat', scores: [90, 80, 80, 60] },
 { name: 'Arnav', scores: [70, 60, 90, 90] },
];

addGrades(students);