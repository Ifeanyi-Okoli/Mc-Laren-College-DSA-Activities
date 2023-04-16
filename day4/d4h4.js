//Exercise Name : Cinema Discount
//cinemaDiscount.md
//A cinema always gives children (aged less than 12 years) a discount.
//It also gives seniors (aged at least 65) a discount on Mondays and Tuesdays.
//Given the day of week and patron's age, write a boolean expression to calculate 
//if the patron is entitled to a discount.


let age = 11;
let day = "Tuesday";
let isGivenDiscount = age < 12 || (age >= 65 && (day === "Tuesday" || day === "Monday"));  //Write an expression given age and day to calculate if patron is given disount.
console.log(isGivenDiscount);