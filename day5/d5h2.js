//Ticket Price Child Adult
// ticketPriceChildAdult.md
// Given a person's age and a day ,write the code for the following scenario:

// If the person is an Adult (age >=18) , the ticket price on Weekends is 100 and on weekdays is 80.

// If the person is a child (age <18), the ticket price is always half of the adult price for that particular day.

// CODE TEMPLATE

let age = 15;
let day = "Sunday";
let price ;
if (age >= 18){
    if (day === "Sunday" || day === "Saturday" ){
        price = 100;
    } 
    else{
        price = 80;
    }
}
else{
    if (day === "Sunday" || day === "Saturday" ){
        price = 100 / 2;
    } 
    else{
        price = 80 / 2;
    }
}
console.log(price);

//||

// let age = 15;
// let day = "Sunday";
// let price;
// if (day === "Sunday" || day === "Saturday") {
//     if (age >= 18) {
//         price = 100;
//     }
//     else {
//         price = 100 / 2;
//     }
// }
// else {
//     if (age >= 18) {
//         price = 80;
//     }
//     else {
//         price = 80 / 2;
//     }
// }
// console.log(price);
