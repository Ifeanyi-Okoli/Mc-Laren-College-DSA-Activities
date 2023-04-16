
let students = [
    {name: 'Raj', age: 18, location:'Delhi', isMarvelFan: true},
    {name: 'Kumar', age: 25, location:'Mumbai', isMarvelFan: true},
    {name: 'John', age: 21, location:'Kolkata', isMarvelFan: false},
    {name: 'Tom', age: 29, location:'Chennai', isMarvelFan: true},
    {name: 'Brad', age: 23, location:'Mumbai', isMarvelFan: false},
    {name: 'King', age: 31, location:'Mumbai', isMarvelFan: false},
    {name: 'Anand', age: 26, location:'Delhi', isMarvelFan: true}
];
// let isAbove23filter = (students) => students.filter((student) => student.age > 23)


let isAbove23 = (student, index, array) => student.age > 23;
let isFromMumbai = (student, index, array) => student.location === 'Mumbai';
let isMarvelFan = (student, index, array) => student.isMarvelFan;
let isNameStartingWithA = (student, index, array) => student.name.startsWith('A');

console.log(students.filter(isAbove23));
console.log(students.filter(isFromMumbai));
console.log(students.filter(isMarvelFan));
console.log(students.filter(isNameStartingWithA));

// function filterStudents(students, filterFunction) {
//     // let filteredStudents = [];
//     // for(let student of students) {
//     //     if(student.filter(isAbove23)) {
//     //         filteredStudents.push(student);
//     //     }
//     // }
//     let filteredStudents = students.filter(isAbove23);
//     return filteredStudents;
// }

// console.log(filterStudents(students, isAbove23));
// console.log(filterStudents(students, isFromMumbai));
// console.log(filterStudents(students, isMarvelFan));
// console.log(filterStudents(students, isNameStartingWithA));
