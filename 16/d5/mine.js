// Mine RichCoins
// Allowed Time: 50 mins

// You are the owner of a crypto mining farm with a few machines. Your job is to mine $RCH coins to earn profit. However, the $RCH coins are very difficult to mine so much so that it can make your machines shut down for some time after mining.

// The transactions you can make are represented by a 0-indexed 2D integer array transactions where transactions[i] = [profiti, powerNeededi]. This array describes the profit you can make by mining $RCH coin in the market and the power it needs to mine that coin and you need to make a decision whether to mine or leave that particular transaction starting from the 0 index.

// Mining coin i will earn you a profit which is proportional to profiti but you will be unable to mine the next powerNeededi coins. If you leave coin i, then you get a choice of either mining or leaving the next coin in the chain.

// Your task is to write a function mineCoins which takes in transactions array and returns the maximum profit that can be made by mining the coins.

// Examples
// Input:
// transactions = [[3, 2], [4, 3], [4, 4], [2, 5]] 
// Output: 5
// - If coin 0 is mined, you will have profit 3 but you will be unable to mine coins 1 and 2.
// - If instead, coin 0 is left and coin 1 is mined, you will have profit 4 but you will be unable to mine
// coins 2 and 3.  

// For the above example, use this process to find the maximum profit
// - Mine coin 0 and have profit 3, but you'll be unable to mine the next two coins
// - Unable to mine coins 1 & 2
// - Mine coin 3, have profit 2.

// Combined profit => 3 + 2 = 5. There's no other way to find more profit from mining the given transactions. 
// Input: [[1,1],[2,2],[3,3],[4,4],[5,5]]
// Output: 7

function combinedProfit(profit, num, index, arr) {
    //iterate through the array starting from index + num + 1
    for (let i = index + num + 1; i < arr.length; i++) {
        let currentMine = arr[i];
        //increment the profit
        profit += currentMine[0];
        //increment the next mining index 
        i = i + currentMine[1];
    }
    return profit;
}

function mineCoins(arr) {
    //A place to strore the combined profits
    let combinedprofitArray = [];
    //iterate through the mine array
    for (let i = 0; i < arr.length; i++) {
        let mine = arr[i];
        //initial profit from current/chosen mine
        let profitMine = mine[0];
        //the mining opportunity to be missed if current mine is chosen
        let missedMine = mine[1];
        //push the combined profit onto the cmbined profit storage
        combinedprofitArray.push(combinedProfit(profitMine, missedMine, i, arr));
    }
    return Math.max(...combinedprofitArray);
}

let transactions = [[3, 2], [4, 3], [4, 4], [2, 5]]

console.log(mineCoins(transactions));

let transactions1 = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]
console.log(mineCoins(transactions1));

let transaction2 = [[100, 2], [110, 2], [3, 3], [103, 4], [5, 5]]
console.log(mineCoins(transaction2));

console.log(mineCoins([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10],]) == 15);