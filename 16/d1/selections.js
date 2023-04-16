// Valid Selections
// Allowed Time: 45 mins

// You are given a string representing students standing in a row.

// 'B' denotes a boy.
// 'G' denotes a girl.
// As a sports instructor, you have to select 3 students for random inspection.

// However, no two consecutive selections can be of the same gender and you have to select students sequenctially, which means in the string if student 2 comes after student 1 then in the selection the student 2 should come after student 1.

// For example, given s = "BBGGBG", we cannot select the 1st, 2nd, and 3rd students as that would form "BBG" which is not allowed.

// Write a function called validSelections which takes in a string representing student genders and returns the number of valid ways to select 3 students.

// Example 1
// Input: s = "BBGGBG"
// Output: 6
// Explanation: 
// The following sets of indices selected are valid:
// - [0,2,4] from "BBGGBG" forms "BGB"
// - [0,3,4] from "BBGGBG" forms "BGB"
// - [1,2,4] from "BBGGBG" forms "BGB"
// - [1,3,4] from "BBGGBG" forms "BGB"
// - [2,4,5] from "BBGGBG" forms "GBG"
// - [3,4,5] from "BBGGBG" forms "GBG"
// No other selection is valid. Thus, there are 6 total ways.
// Example 2
// Input: s = "BBBGG"
// Output: 0
// Explanation: No valid selection possible

function studentSelectionHelper(prevStudent, students, index){
let selection="";
selection += prevStudent; 
    let studentArr = students.split("");
    studentArr.splice(index,1)
    let validStudent = studentArr.join("");
     index = 1;
    // console.log(selection)
    for (let i = index; i<validStudent.length;i++){
        let currStudent = validStudent[i];
        if(prevStudent !== currStudent){
            selection += currStudent;
            prevStudent = currStudent;
            // console.log(selection);
        }
        if(selection.length === 3) return;
    }
    return 0
}


function validSelections(students){
// write your code here
//create count variable
let studentCount= 0;
//loop through students
for (let i = 0; i < students.length; i++){
    let currStudent = students[i];
    // console.log(currStudent)
    let valid = studentSelectionHelper(currStudent, students, i);
    if (valid !==0) studentCount++;
}
    //if prev !== curr && if currIndex > prevIndex
//return count
return studentCount;
}
console.log(validSelections("BBGGBG"));//6
console.log(validSelections("BBBGG"));//0

