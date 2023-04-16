//Exercise Name : Ticket Price Using If-else part2
//ticketPriceUsingIfElsePart2.md
//NOTE: Dont use if-else-if. You can use only if-else

// Given two variables age and day, write code to determine the ticket price as per the following rules :

// For a child (age less than 12) the ticket price is always 50.

// For a senior citizen(age greater than or equal to 65):

// i) if it is weekend (Saturday/Sunday) the price is 70.

// ii)if it is a  weekday the price is 80.
// For everyone else the price is always 100.

// Here is a link to the branch diagram for the problem https://imgur.com/a/y6ApDYJ

// As mentioned in the branch diagram your task is to first check the age 
//and then check whether its a weekend or a weekday and then decide the ticket price

// CODE TEMPLATE

let age = 21;
let day = 'Monday';
let price;
if (age < 12) {
    price = 50;
}
if (age >= 65) {
    if (day === "Saturday" || day === "Sunday") {
        price = 70;
    } else {
        price = 80;
    }
} if (age >= 12 && age < 65) {
    price = 100
}
console.log("Ticket price is " + price);