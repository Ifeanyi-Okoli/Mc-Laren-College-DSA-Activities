let students = [
    {name: 'Raj', age: 18, location:'Delhi', isMarvelFan: true},
    {name: 'Kumar', age: 25, location:'Mumbai', isMarvelFan: true},
    {name: 'John', age: 21, location:'Kolkata', isMarvelFan: false},
    {name: 'Tom', age: 29, location:'Chennai', isMarvelFan: true},
    {name: 'Brad', age: 23, location:'Mumbai', isMarvelFan: false},
    {name: 'King', age: 31, location:'Mumbai', isMarvelFan: false},
    {name: 'Anand', age: 26, location:'Delhi', isMarvelFan: true}
];

let output = students.reduce(function(acc, curr){
    if (acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output);

let output1 = students.filter((x) => x.age <30).map((x)=>x.name);
console.log(output1);