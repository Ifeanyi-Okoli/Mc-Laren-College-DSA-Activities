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
function average(num1, num2){
    let avg = num1/num2;
    if (avg > 90){
        return "A";
    }
    if (avg > 80){
        return "B";
    }
    if (avg > 70){
        return "C";
    }
    if (avg > 60){
        return "D";
    }
    if (avg > 50){
       return "E";
    }
    else{
        return "F";
    }
}

function addGrade(student, semester) {
    let score = student.scores;
    let sum = 0;
    let sum1 = 0;
    let count = 0;
    let Grade;
  for (let i = 0; i < score.length; i++){
      count++;
      for (let j = 0; j < score[i].length; j++){
          if(j ===1){
              sum = sum + score[i][j];
          }
          if(j ===0){
            sum1 = sum1 + score[i][j];
        }
      }
  }
let avg = sum / count;
if (avg > 90){
    Grade = "A";
}
else if (avg > 80){
    Grade = "B";
}
else if (avg > 70){
    Grade = "C";
}
else if (avg > 60){
    Grade = "D";
}
else if (avg > 50){
    Grade = "E";
}
else{
    Grade = "F";
}
student["semester" + semester + "_grade"] = average(sum, count);
console.log(student) ;
}

let student1 = { name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]] };

addGrade(student1, 2); // since the semester value is 2 the scores will be 100, 80, 100 and 60 so adding them gives 340. 
// So the average value will be 85. And Hence the grade is `B`. So we will add the property `semeseter2_grade` with the value `B`.

console.log(student1); // should print{ name: 'Akshat', scores: [[90, 100], [80, 80], [80, 100], [60, 60]], semeseter2_grad