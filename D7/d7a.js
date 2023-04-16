// Average using Reduce
// Write a function which takes in list of students and calculate the average of their scores 
//using reduce.

let student1 = {
  name: 'Aditya',
  score: 95,
  grade: 7
};

let student2 = {
  name: 'Nikhil',
  score: 75,
  grade: 8
};

let student3 = {
  name: 'Danny',
  score: 84,
  grade: 7
};



let student4 = {
  name: 'Kimiko',
  score: 64,
  grade: 8
};

let students = [student1, student2, student3, student4];

function getSum(acc, curr){
     acc = acc + curr.score;
    return acc;
}
let totalScore = students.reduce(getSum, 0);
let averageScore = totalScore/students.length;
console.log(averageScore);