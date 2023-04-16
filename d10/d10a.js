//Create a Students class which takes name and initializes a new object with keys name and 
//scores.
// Implement a method addScore to add new score into scores list.
// Implement a method called getAverageScore which returns average score of the student.
// Implement a method called printInfo which returns 'Name has an average score of xx' string. 
//The average score should be rounded to 2 places of decimal.

class Student {
    constructor(name, scores = []) {
        this.name = name;
        this.scores = scores;
    }
    addscore(newScore) {
        return this.scores.push(newScore);
    }
    getAverageScore(){
        let totalScore = this.scores.reduce((acc,curr)=>{
           return  acc + curr;
        }, 0)
        let averageScore = totalScore/this.scores.length;
        return averageScore;
    }
    printInfo(){
        return  `${this.name} has an average score of ${this.getAverageScore()}`;
    }
}

let student1 = new Student("Ifeanyi", [99, 95, 90, 94]);
let student2 = new Student("Okoli");
student2.addscore(97);
student2.addscore(98,54);

console.log(student1.printInfo());
console.log(student2.printInfo());
console.log(student1.getAverageScore());
console.log(student2.getAverageScore());