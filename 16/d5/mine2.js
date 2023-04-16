
function combinedProfit(profit, num, index, arr) {
    //iterate through the array starting from index + num + 1
    let i = index + num + 1;
    while(i < arr.length){
    let currentMine = arr[i];
        //increment the profit
        profit += currentMine[0];
        //increment the next mining index 
        index = index + currentMine[1];
        combinedProfit(profit, num, index, arr)
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