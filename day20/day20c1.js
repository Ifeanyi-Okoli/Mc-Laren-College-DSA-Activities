//can-shop-or-not.md
// Implement the function canShop that takes an array of objects (groceries) and the balance amount and checks if we can purchase all the items that are listed in grocery list or not.

// Example:

// canShop([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ], 5) ➞ true // because we have sufficient amount to purchase all the grocery items.

// canShop([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ], 10) ➞ false // As we donot have sufficient amount to purchase all the grocery items.

function canShop(groc, bal){
    let cost = 0;
for (let i = 0; i < groc.length; i++){
    cost += groc[i]["quantity"]*groc[i]["price"]; 
}
if (cost < bal){
   return  true;
}
return false;

}

console.log(canShop([
      { product: "Milk", quantity: 1, price: 1.50 },
      { product: "Cereals", quantity: 1, price: 2.50 }
    ], 5)) //➞ true // because we have sufficient amount to purchase all the grocery items.
    
    console.log(canShop([
      { product: "Milk", quantity: 1, price: 1.50 },
      { product: "Eggs", quantity: 12, price: 0.10 },
      { product: "Bread", quantity: 2, price: 1.60 },
      { product: "Cheese", quantity: 1, price: 4.50 }
    ], 10)) //➞ false // As we donot have sufficient amount to purchase all the grocery items.
    