// Maximum Profit Experiment
// Allowed time: 70 mins

// You are conducting an experiment in the market. You have asked two of your good friends Raj and Neil to go to the market and shop for you. You are given with an array that represents the profit/loss you can make when dealing with shops in the market.

// The conditions you have given them is

// Raj has to choose the consecutive shops for his shopping, and he has to find the maximum profit he can earn that way. If he can't find any such shops (all shops are leading to loss) then he will report 0.
// Neil can skip one shop from the consecutive list of shops for his shopping, and he will also report the maximum profit he can make that way.
// Your task is to determine the difference of Raj's profit and Neil's profit.

// Have a look at examples for better understanding.

// Example
let sumArr = [];
let sumArr2 = [];
function calculateProfitHelper(arr){
    let sum = 0;    
    if(arr.length === 1){
        return;
    }
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    sumArr.push(sum);
    arr.shift();
    // console.log(sumArr);
    calculateProfitHelper(arr);
    console.log(sumArr);
    
    return sumArr;
}


function calculateProfitHelper2(arr){
    let sum = 0;    
    if(arr.length === 1){
        return;
    }
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    sumArr2.push(sum);
    arr.pop();    
    calculateProfitHelper2(arr);
    let max = Math.max(...sumArr2);
    return max;
}

function calculateProfit(arr){
    let arrTemp = JSON.parse(JSON.stringify(arr))
    let sumArr = calculateProfitHelper(arrTemp);
    let max = Math.max(...sumArr);
    let index = sumArr.indexOf(max);
    arr.splice(0,index);
    let arrTemp2 = JSON.parse(JSON.stringify(arr))
    let maxRaj = calculateProfitHelper2(arrTemp2);
    let min = Math.min(...arr);
    // console.log(min);
    index = arr.indexOf(min);
    arr.splice(4,1);
    let sum = 0;
    for(let i = 0; i <arr.length; i++){
        sum += arr[i];
    }
    let diff = Math.abs(sum - maxRaj);
    return diff;
}


// console.log(calculateProfit([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // should return 4

// Raj's maximum profit with consecutive shops would be 6: [4, -1, 2, 1]

// Neil's profit with skipping one shop would be 10: [4, -1, 2, 1, -5, 4], skipped shop `-5` loss

// Output should be 10 - 6 = 4
console.log(calculateProfit([3, -1, 3, -1, 2, -1, -3, 4, -1, 2, 1, -5, -4])); // should return 3
// Raj's maximum profit with consecutive shops should be  8: [3, -1, 3, -1, 2, -1, -3, 4, -1, 2, 1]
// Neil's profit with skipping one shop would be 11: [3, -1, 3, -1, 2, -1, -3, 4, -1, 2, 1] skipped shop with `-3` loss

// Output should be 11 - 8 = 3