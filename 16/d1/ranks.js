// Relative Ranks
// Allowed time: 40 mins

// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

// Athletes sharing the same score will be shared the same rank/Medal.

// Example 1:
// Input: score = [5,4,3,2,1]

// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]

// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
// Example 2:
// Input: score = [10,3,8,9,4]

// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].
// Some more examples with same scores

function findRelativeRanks(scores){
// write your code here
//duplicate the array
let result = JSON.parse(JSON.stringify(scores));
let scoresClone=JSON.parse(JSON.stringify(scores))
scoresClone.sort((a,b)=> b-a);
// console.log(scoresClone)
//iterate through the sorted clone
let goldIndex = scores.indexOf(scoresClone[0]);
let silverIndex =  scores.indexOf(scoresClone[1]);
let bronzeIndex = scores.indexOf(scoresClone[2]);
result[goldIndex] = "Gold Medal";
result[silverIndex] = "Silver Medal";
result[bronzeIndex] = "Bronze Medal";
let position = 3;
for(let i = 0; i < scoresClone.length; i++){
    if (i > 2){
    if(scoresClone[i]=== scoresClone[2]){
        let index = scores.indexOf(scoresClone[i]);
        console.log(index);
        result[index] = "Bronze Medal";
    } 
    else if(scoresClone[i]=== scoresClone[1]){
        let index = scores.indexOf(scoresClone[i]);
        result[index] = "Silver Medal";
    } else{
        position++;
        let index = scores.indexOf(scoresClone[i]);
        result[index] = position.toString()
    }

}
}
// console.log(result);

//sort

return result;
}
console.log(findRelativeRanks([5,4,3,2,1]));// ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10,3,8,9,4]));// ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
console.log(findRelativeRanks([10,3,8,8,4]));// ["Gold Medal","4","Silver Medal","Silver Medal","Bronze Medal"]
console.log(findRelativeRanks([1,10,4,8,8,4,2]));// ["5", "Gold Medal","Bronze Medal","Silver Medal","Silver Medal","Br