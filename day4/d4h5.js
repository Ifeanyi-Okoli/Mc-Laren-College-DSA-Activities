// Exercise Name : Discount Code
// Discount.md
// Write an expression to tell us if our hotel booking gets a discount. 
//The booking gets a discount if the discount code is "HAPPY" or "TIGER". 
//The booking also gets a discount if the age is greater than 65 
//and the discount code is "SUPERSENIOR".

// CODE TEMPLATE

let discountCode = "SUPERSENIOR";
let age = 45;
let getsDiscount = discountCode === "HAPPY" || discountCode === "TIGER" || (age > 65 && discountCode === "SUPERSENIOR");// write your expression here
console.log(getsDiscount);