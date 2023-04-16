let student1 = {
    name: 'Aditya',
    score: 95,
    grade: 7
  }
  
  let student2 = {
    name: 'Nikhil',
    score: 75,
    grade: 8
  }
  
  let student3 = {
    name: 'Danny',
    score: 84,
    grade: 7
  }
  
  
  
  let student4 = {
    name: 'Kimiko',
    score: 64,
    grade: 8
  }
  
  let students = [student1,student2,student3,student4]
  // Part 1
  // Use in-built `filter` function to generate a new array called `goodStudents` consisting of only 
  //students whose scores are above 80.
  
  let isGoodStudent = (student) => student.score>80;
  let goodStudents = students.filter(isGoodStudent);
  console.log(goodStudents);

  // Part 2
  let numbersList = [11, 55, 32, 66, 82, 90, 1, 5, 93]
  // Use in-built `filter` function to generate a new array called `oddNums` consisting of only odd 
  //numbers.

  let isOddNum = (num) => num%2 === 1;
  let oddNums = numbersList.filter(isOddNum);
  console.log(oddNums);