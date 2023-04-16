// Use reduce method to solve both the parts

// Part 1:
// Write a function called countVoters which takes in an array of voter 
// objects as given below, and returns the count of people who have voted. 
//(voted property has value true)

let voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
console.log(countVoters(voters)); // should return 7

function countVoters(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].voted) {
            count++;
        }
    }
    return count;
}


// Part 2:
// Now let's find out how many of the potential voters were in the ages 
//18-25, how many from 26-35, how many from 36-55, and how many of each of 
//those age ranges actually voted.

// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

let voters2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true}
] 

function voterAnalysis(arr) {
    let arrYoungPeople = [];
    let arrMidPeople = [];
    let arrOldPeople = [];
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age >= 18 && arr[i].age <= 25) {
            arrYoungPeople.push(arr[i]);
        }
        else if (arr[i]["age"] >= 26 && arr[i]["age"] <= 35) {
            arrMidPeople.push(arr[i]);
        }
        else if (arr[i]["age"] >= 36 && arr[i]["age"] <= 55) {
            arrOldPeople.push(arr[i]);
        }
    }
    let numYoungVotes = countVoters(arrYoungPeople);
    let numMidVotes = countVoters(arrMidPeople);
    let numOldVotes = countVoters(arrOldPeople);
    result.numYoungVotes = numYoungVotes;
    result.numYoungPeople = arrYoungPeople.length;
    result.numMidVotes = numMidVotes;
    result.numMidPeople = arrMidPeople.length;
    result.numOldVotes = numOldVotes;
    result.numOldPeople = arrOldPeople.length;

    return result;
}

console.log(voterAnalysis(voters)); // Returned value shown below:
console.log(voterAnalysis(voters2)); // 


/*
{ 
    numYoungVotes: 1,
    numYoungPeople: 4,
    numMidVotes: 3,
    numMidPeople: 4,
    numOldVotes: 3,
    numOldPeople: 4 
}
*/

/*
your function should return { 
          numYoungVotes: 1,
          numYoungPeople: 3,
          numMidVotes: 2,
          numMidPeople: 2,
          numOldVotes: 1,
          numOldPeople: 1 
      }
*/