// Part 1
let dimensions = [[2, 4], [5, 5], [6,3], [12, 5]];
// Given the array of dimensions (width and height) of rectangles, return a new list which consist 
//of areas of the rectangles using forEach method.
// function area(arr){
// return arr[0]*arr[1];
// }
let area1 = [];
dimensions.forEach(dimension => {
    area1.push(dimension[0]*dimension[1]);
}
// console.log(area1);


// Part 2
// let dimensions = [[2, 4], [5, 5], [6,3], [12, 5]];
// Use the map method to generate a new list which consist of areas of the rectangles. 
function getArea(dimension){
    return dimension[0]* dimension[1];
}
let mapAreas1 = dimensions.map(getArea);
console.log(mapAreas1);


// Part 3
// let dimensions = [[2, 4], [5, 5], [6,3], [12, 5]];
// Use destructuring and map method to generate a new list which consist of areas of the rectangles.
function getAreaDestructured(width, height){
    return width * height;
}
let mapAreas = dimensions.map(getArea);
console.log(mapAreas);


// Part 4
let users = [ {firstName: 'Akhil', lastName:'Gupta', age: 33}, {firstName: 'John', lastName:'Davis', age: 25}, {firstName: 'Kimiko', lastName:'Yamaguchi', age: 64}];
// Given the list of users, create a new list consisting of firstName and lastName.
// e.g. list should contain 'Akhil Gupta', 'John Davis', 'Kimiko Yamaguchi'