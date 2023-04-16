// Given various ice-creams flavours that are loved by different Superhero characters we would like to know the count of various ice-creams flavors. Your task is to return an object where each property is the name of the an ice cream flavor and value is an integer that is the total count of that flavor.

// Note: Use reduce and other inbuilt method to solve this challenge.

// Starter Code:

let data = [
    { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
    { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
    { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
    { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
    { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
    { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];

let getAllFlavors = (acc, currObj) => {
    return acc.concat(currObj.favoriteIceCreams)
}
let allFlavors = data.reduce(getAllFlavors, []);
console.log(allFlavors);

let getCountObj = (acc, flavor) => {
    if(acc[flavor] !== undefined){
        acc[flavor]++;
    }else{
        acc[flavor]=1;
    }
    return acc;
}
let flavorsObj = allFlavors.reduce(getCountObj, {}); // final answer here

console.log(flavorsObj);

/* Expected Output:
{
  'Strawberry': 3,
  'Vanilla': 4,
  'Chocolate': 5,
  'Cookies & Cream': 2,
  'Mint Chocolate Chip': 3,
  'Rocky Road': 1,
  'Pistachio': 1,
  'Banana': 1,
  'French Vanilla': 1,
  'Vanilla Bean': 1
}
*/