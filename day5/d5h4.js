//Cinema Discount Part 2
// cinemaDiscount2.md
// A cinema gives children (aged less than 12 years) and Seniors (aged at least 65) 
//a discount except on Sundays when everyone pays full price.
// Given the day of week and patron's age, write a boolean expression to calculate if 
//the patron is entitled to a discount.

// CODE TEMPLATE

let age = 11;
let day = "Tuesday";
let isGivenDiscount = (age < 12 || age >= 65) && day !== "Sunday";  //Write an expression given age and day to calculate if patron is given disount.
console.log(isGivenDiscount);