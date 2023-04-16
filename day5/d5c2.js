let score = 92;
let grade;
if (score > 90) {
    grade = "Grade A";
}
if (score > 80 && score <=90){
    grade = "Grade B";
}
if (score > 70 && score < 80) {
    grade = "Grade C";
}
else {
    grade = "Grade F";
}// the else statement affects only the last if block.
console.log(grade);