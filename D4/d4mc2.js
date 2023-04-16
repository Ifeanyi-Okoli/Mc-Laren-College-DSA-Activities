//Exercise 2
// Write a function that has two parameters: orders and cost. Return any orders that are greater 
//than the cost.

// Examples
function expensiveOrders(obj, num) {
    let res = {};
    for (i in obj) {
        if (obj[i] > num) {
            res[i] = obj[i];
        }
    }
    return res;
}
console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)); // should return { "a": 3000, "c": 1050 }

console.log(expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)); // should return { "Gucci Fur": 24600 }

console.log(expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)); // should return {}