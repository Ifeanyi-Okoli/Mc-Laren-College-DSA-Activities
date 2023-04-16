//else-if practice foundations.js
// Re-write the following code to use `if-else if-else` blocks
let score = 72;
let grade;
if (score > 90) {
  grade = "Grade A";
} else if (score > 80) {
  grade = "Grade B";
} else if (score > 70) {
  grade = "Grade C";
} else {
  grade = "Grade F";
}
console.log(grade);