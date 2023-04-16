// Find the student with highest average scores from the following list of students

// function getBestStudent(arr){
// let average =arr.reduce(function (sum, student){
//     sum + (student.score);
// }, 0);

//     arr.reduce()
// }



let students = [
  {
    "rollNo": "62748c7a2e46487db5984787",
    "scores": [
      70,
      62,
      78,
      50,
      62,
      75,
      78,
      81
    ]
  },
  {
    "rollNo": "62748c7a3e6d96a6882344a1",
    "scores": [
      92,
      77,
      91,
      52,
      75
    ]
  },
  {
    "rollNo": "62748c7ad12d94dc701fcc84",
    "scores": [
      94,
      80,
      99,
      97,
      64,
      77
    ]
  },
  {
    "rollNo": "62748c7ad0601a3dba90eec1",
    "scores": [
      79,
      67,
      86,
      85,
      59,
      69
    ]
  },
  {
    "rollNo": "62748c7aa7e15c14e6bfaf9a",
    "scores": [
      75,
      72,
      66,
      94,
      61
    ]
  },
  {
    "rollNo": "62748c7aa9d118f64565a750",
    "scores": [
      76,
      59,
      71,
      88
    ]
  },
  {
    "rollNo": "62748c7ad695bd8c7d603a16",
    "scores": [
      66,
      73,
      54,
      70,
      95,
      99,
      60,
      56
    ]
  },
  {
    "rollNo": "62748c7a97ded90178d40915",
    "scores": [
      91,
      84,
      80,
      93,
      62,
      67,
      89
    ]
  },
  {
    "rollNo": "62748c7a382c814cb514341d",
    "scores": [
      93,
      66,
      67,
      95,
      82,
      90
    ]
  },
  {
    "rollNo": "62748c7a9046532eaf6b01a1",
    "scores": [
      67,
      70,
      61,
      66,
      60,
      91,
      66
    ]
  },
  {
    "rollNo": "62748c7ab727ebda2e910622",
    "scores": [
      86,
      82,
      93,
      75,
      59,
      86,
      78
    ]
  },
  {
    "rollNo": "62748c7a1c68c6c436d17ed0",
    "scores": [
      66,
      83,
      96,
      81
    ]
  },
  {
    "rollNo": "62748c7a250e70b588b67c7e",
    "scores": [
      60,
      99,
      51,
      56
    ]
  },
  {
    "rollNo": "62748c7af5fb4c96a3a7ae98",
    "scores": [
      63,
      70,
      82,
      93
    ]
  },
  {
    "rollNo": "62748c7aa627a7a0f7a6e5b3",
    "scores": [
      80,
      79,
      96,
      62
    ]
  },
  {
    "rollNo": "62748c7a4cf78af911c6ed6c",
    "scores": [
      50,
      83,
      58,
      69,
      54,
      83
    ]
  },
  {
    "rollNo": "62748c7a100d0c564662e2f6",
    "scores": [
      83,
      64,
      91,
      54,
      89,
      81,
      59,
      92
    ]
  },
  {
    "rollNo": "62748c7a899bbc4a8426c28e",
    "scores": [
      64,
      84,
      91,
      60
    ]
  },
  {
    "rollNo": "62748c7a348ad80abfbfcd21",
    "scores": [
      58,
      76,
      51,
      65,
      91
    ]
  },
  {
    "rollNo": "62748c7a3a0eb6d7925a185d",
    "scores": [
      50,
      75,
      57,
      55,
      65,
      69
    ]
  }
];



let getBestStudent = (acc, student) => {
  let accAvg = acc.scores.reduce((acc, num) => acc + num) / acc.scores.length;
  let studentAvg = student.scores.reduce((acc, num) => acc + num) / student.scores.length;
  if (accAvg > studentAvg) return acc;
  else return student;
}

// Create new array modifiedStudents in which each student object has an `average` property which is the average of all the scores they have. Use .map to do this.

let bestStudent = students.reduce(getBestStudent); // final answer here.
console.log(bestStudent);

//Part2

let addAvgProperty = (student) =>{
  let averageScore = student.scores.reduce((acc, num) => acc + num)/ student.scores.length;
  student.average = averageScore;
  return student;
}

let modifiedStudents = students.map(addAvgProperty);//
console.log(modifiedStudents);