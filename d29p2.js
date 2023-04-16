// Plumbing
// Allowed Time: 30 mins

// You are a plumber who is hired to work on a certain building's water supply chain. This building has a floor plan with internal water pumps. Your job is construct a piping system which takes the water from these pumps to a water tank outside the building.

// You are given a 0-indexed binary string array floorPlan representing the floor plan of the building, which is an m x n 2D matrix. floorPlan[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while '1' means the cell has a water pump.

// You can construct one pipe between any two water pumps if both conditions are met

// The two water pumps are located on two different rows: r1 and r2, where r1 < r2.
// For each row i where r1 < i < r2, there are no water pumps in the ith row. (Ie. if you want to connect two pumps in different row there shouldn't be any water pump in between rows).
// Water pipes are independent, i.e., one pipe does not interfere nor join with another.

// Your task is to return the total number of water pipes you would have to construct in the building.
function piping(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "1") count++;
    }
    return count;
}


function floorPlan(arr) {
    let count = 0;
    let countArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        countArr.push(piping(arr[i]));
    }
    // console.log(countArr);
    for(let j = 0; j < countArr.length-1; j++){
        if(countArr[j]===0) countArr.splice(j,1);
        if(countArr.length===1) return 0;
          sum = sum +  (countArr[j] * countArr[j+1]);
        
    }
    return sum;
}


console.log(floorPlan(["011001", "000000", "010100", "001000"])) //=> 8
console.log(floorPlan(["000", "111", "000"])) //=> 0

