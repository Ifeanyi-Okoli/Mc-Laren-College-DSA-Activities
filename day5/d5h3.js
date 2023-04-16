//Tax Percentage
// taxPercentage.md
// Given the income and the number of children, calculate the tax percentage. 
//If income is above 50,000 the tax is 45% otherwise 40% 
//If there are children then the tax percentage decreases by 2%.

// CODE TEMPLATE

let income = 60000;
let hasChildren = true;
let taxPercentage;
if (hasChildren === false) {
    if (income <= 50000) {
        taxPercentage = 40;
    }
    else {
        taxPercentage = 45;
    }
}
else {
    if (income <= 50000) {
        taxPercentage = 38;
    }
    else {
        taxPercentage = 43;
    }
}

console.log("The applicable tax percentage is " + taxPercentage + "%");