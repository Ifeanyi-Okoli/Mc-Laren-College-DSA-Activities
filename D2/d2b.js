//A farm has several rows of crops C and some water outlets W. You are given a farm in form of 
//nested array like

// Task 0
// Draw the object diagram for the variable farm provided.

// Task 1
// Write a function totalSpots which takes in the farm and returns total spots in the farm. For eg.

function totalSpots(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j <arr[i].length; j++){
            total++;
        }
    }
    return total;
}


// Task 2
// Write a function printLayout which takes in the farm and prints it's layout as given in example.

// Code Template for this exercise

let farm = [['W', 'C', 'C'], ['C', 'C', 'C'], ['W', 'W', 'C'], ['C', 'C', 'W']]

// Part 1 - Write the function totalSpots below

console.log(totalSpots(farm)); // should print 12

// Part 2 - Write printLayout function below
function printLayout(arr){    
    for (let i = 0; i < arr.length; i++){
        let prn = "";
        for (let j = 0; j <arr[i].length; j++){
            if(j <2){
                prn = prn + arr[i][j] + " | ";
            }
            else{
                prn = prn + arr[i][j];
            }            
        }
        console.log(prn);
           }
   
}



printLayout(farm);
// should print 
// W | C | C
// C | C | C
// W | W | C
// C | C | W