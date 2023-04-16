//Exercise Name : UK Tax Band Calculation
//Given the taxable income amount, write the code the tax amount based on the above table.

//For example,

let taxableIncome = 10000;
let taxAmount;
if (taxableIncome <= 12500){
    taxAmount = taxableIncome * 0.0;
} else if (taxableIncome > 12500 && taxableIncome <= 50000){
    taxAmount = 12500 * 0.0 + (taxableIncome - 12500) * 0.2;
} else if (taxableIncome > 50000 && taxableIncome <= 150000){
    taxAmount = 12500 * 0.0 + 37500 * 0.2 + (taxableIncome - 50000) * 0.4;
} else {
    taxAmount = 12500 * 0.0 + 37500 * 0.2 + 100000 * 0.4 + (taxableIncome - 150000) * 0.45;
}
console.log(taxAmount);