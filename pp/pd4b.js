//Piggy Bank
// piggyBank.md
// John puts money in his piggy bank every day. Every day, he puts in $1 more 
//than the previous day. Every Monday he starts with a new value ⁠— $1 more than the 
//previous Monday.

// Write a Javascript function to calculate the amount he has collected in his 
//piggy bank given the amount he starts with and the number of days he collects 
//money.

// Note: John has started depositing the money from Monday.

function piggyBank(firstDeposite, numberOfDays) {
    let i = 2;
    let sum = firstDeposite;
    let total = firstDeposite
    while (i <= numberOfDays) {
        if (i < 8 || (i > 8 && i < 15)) {
            sum++;
            total += sum;
        }
        if (i === 8 || i === 15) {
            firstDeposite++;
            sum = firstDeposite;
            total += sum;
        }
        i++;
    }
    return total;
}

console.log(piggyBank(1, 1));//1 (On Monday he deposited 1 dollar)
console.log(piggyBank(1, 7));//28 (On Monday he deposited 1 dollar, Tuesday 2 dollar, Wednesday 3 dollar, Thursday 4 dollar, Friday 5 dollar, Saturday 6 dollar, Sunday 7 dollar so total is 28 dollar)
console.log(piggyBank(1, 12));//48
console.log(piggyBank(3, 15));//96