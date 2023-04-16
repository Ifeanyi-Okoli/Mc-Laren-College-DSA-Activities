// Weighted Sorting
// Allowed Time: 35 mins

// You have been crowned an emperor of CopperPlanet-XV, and creating a new number system. To decide which number will be larger you want to check it's weight. The weight of a number is the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the numeric list 100 will come before 99.

// Given a string with the numbers in normal order can you give this string ordered by "weights" of these numbers?

// Example
// "56 65 74 100 99 68 86 180 90" 

// ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

function orderWeight(str) {
    let arr = str.split(" ");
    let res = [];
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum = sum + parseInt(arr[i][j]);
        }
        temp.push([sum, arr[i]]);
    }
    // let count = 0;
    // 
    // for (let i = 0; i < temp.length; i++) {
        // while(count < 50){
    //         if (temp[0] === count) {
    //             if (temp[1][0] === 1) res.push(temp[1]);
    //             res.push(temp[1]);
    //         }
            
    //     }
    //     count++;
    // }
    // console.log(temp);
    temp.sort();
    temp.forEach((el) =>{
        console.log(el, String(el).charCodeAt(0));
    })
    for (let i = 0; i < temp.length; i++) {   
        // console.log(temp[i][1]);   
            // if(temp[i][1].localecompare(temp[i+1][1]) === 0) res.push(temp[i][1], temp[i+1][1]);
            // else if (temp[i][1].localecompare(temp[i+1][1]) === -1) res.push(temp[i][1]);
            // else if (temp[i][1].localecompare(temp[i+1][1]) === 1) res.push(temp[i+1][1]);
            // }
    
    
}
return res;
}


console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));// should return "11 11 2000 10003 22 123 1234000 44444444 