// The Baking Machine
// Allowed Time: 30 mins

// You have designed a machine to bake some cakes. The machine should be smart and can measure proportions on it's own. How many cakes could the machine bake considering his recipes?

// Write a function cakesCount, which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes machine can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples

function cakesCount(obj1, obj2){
    let count = 0;
    let arr = [];
    if(Object.keys(obj1).length > Object.keys(obj2).length) return 0;
    Object.keys(obj1).forEach(function (key) {
        if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)){
       count = Math.min(parseInt(obj2[key] / obj1[key]))
       arr.push(count);
        }
})
   let res = Math.min(...arr);
    return res;
}


console.log(cakesCount({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // should return 2

console.log(cakesCount({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); // should re