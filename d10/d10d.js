//Write a class Student which has 3 properties name, age and grade. You should make 
//sure that all 3 parameters are passed when an object is created and age should be 
//positive. If an invalid age (< 0) is passed then you should print Invalid age 
//provided, setting default age to 10, and set age property to have value 10.

class Student {
    constructor(name, age = 10, grade){
        this.age = age;
        if(age<0){
            console.log("Invalid age provided");
            this.age = 10;
        }
        this.name = name;
       
        this.grade = grade;
    }
  }

  let student1 = new Student("Ifeanyi", -1, 95);
  console.log(student1);