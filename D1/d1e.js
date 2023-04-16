// Implement a `priceCalculator` function which takes in a boolean `isChild` and a string `dayOfWeek`. 
// If it is a Sunday then price of ticket would be 80 else price would be 50
// if it is a child then the price would be halved
// Note: Any person below age 12 is considered as child.

function priceCalculator(isChild, dayOfWeek) {
    let price = 50;
    if (dayOfWeek === "Sunday") {
        price = 80;
    }
    if (isChild) {
        price = price / 2;
    }
    return price;
}



// Q.2 calculate ticket price this person will have to pay on Sunday.
let person = {
    name: 'Sujan',
    age: 22
};
let isPersonAChild = false;
if (person.age < 12) {
    isPersonAChild = true;
}

console.log(priceCalculator(false, "Sunday"))