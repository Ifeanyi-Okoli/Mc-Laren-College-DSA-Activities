let student1 = {
    name: 'Aditya',
    score: 55,
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
  // Use forEach to print student info like:
  // 'Kimiko scored 64'

function info(obj){
console.log(`${obj.name} scored ${obj.score}`)
}
students.forEach(info);

  // Part 2
  // Print the student info `Kimiko scored 64` and if the student scores more than 80 also add 'Well Done, studentName!'
  // e.g. 'Danny scored 84. Well Done, Danny!
  
  function above80(obj){
    if (obj.score>80){
      console.log(`${obj.name} scored ${obj.score}. Well Done, ${obj.name}!`)
    }
    else{
    console.log(`${obj.name} scored ${obj.score}`)
    }
  }
    students.forEach(above80);
  
  // Part 3
  // Print the student info like this:
  // 1. Aditya scored 55
  // 2. Nikhil scored 75
  // 3. Danny scored 84
  // 4. Kimiko scored 64
  let count = 1;
  function infoCount(obj){
    
    console.log(`${count}. ${obj.name} scored ${obj.score}`)
    count++;
    }
    students.forEach(infoCount);
   
  