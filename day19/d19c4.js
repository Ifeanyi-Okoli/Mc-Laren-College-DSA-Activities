//Count the number of boxes in each row
// boxesInRows.md
// There is an array of boxes where each element of an array represents the number of boxes stacked on top of each other in that column. For eg. boxes=[4,1,2,3,2,1].

// This is a row of boxes where the first column of boxes has 4 boxes stacked on top of each other. The second column has 1 box, the third column has 2 boxes stacked on top of each other and the fourth column has 3 boxes stacked on top of each other and so on. So the boxes look like this:

//               B
//               B     B
//               B   B B B
//               B B B B B B
// Your task is to write a function that accepts this array and returns an array 
//containing the number of boxes present in each row starting from the bottom. 
//For eg. the result for the above eg. would be [6,4,2,1] as there are 6 boxes in the 
//bottom-most row, 4 boxes in the row above the bottom row , 2 boxes in the row above it 
//and 1 box in the topmost row.

// Hence.

// console.log(boxesInRows([4,1,2,3,2,1])) // returns [6,4,2,1]
// CODE TEMPLATE

function boxesInRows(boxes){
let result = [];
let len = 1;
while (len >= 1){
    let count = 0;
for (let i = 0; i < boxes.length; i++){
    if (boxes[i] !== 0){
        boxes[i] = boxes[i] - 1;
        count++;
    }
}
result.push(count);
if (count > 1){
len++;
}
else{
len = 0;
}
}
return result;
}
console.log(boxesInRows([4, 1, 2, 3, 2, 1]));// returns [6, 4, 2, 1]
console.log(boxesInRows([4, 0, 3, 1, 2]));// returns [4, 3, 2, 1]