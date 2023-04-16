//single Married Tax Rate
//singleMarriedTaxRate.md
//In 2022, the tax-rate for a married person is 20 % and for an un-married person 
//is 25 %. Otherwise, the tax-rate for a married person is 21 % and for an un-married 
//person is 24 %.

//CODE TEMPLATE

let year = 2020;
let isMarried = false;
let taxRate;
if (year === 2022) {
    if (isMarried) {
        taxRate = 20;
    }
    else {
        taxRate = 25;
    }
}
else {
    if (isMarried) { 
        taxRate = 21;
    }
        else{
        taxRate = 24;
    }
}
console.log(taxRate);