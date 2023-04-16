/*
Re-write the below code using standard **filter function** by reading the documentation on 
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), make sure to remove the filterStudents function.
*/

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


function filterStudents(students, filterFunction) {
    let filteredStudents = [];
    for(let student of students) {
        if(filterFunction(student)) {
            filteredStudents.push(student);
        }
    }
    return filteredStudents;
}

console.log(filterStudents(students, isAbove23filter));
console.log(filterStudents(students, isFromMumbai));
console.log(filterStudents(students, isMarvelFan));
console.log(filterStudents(students, isNameStartingWithA));

/*
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

*/