// Exercise : Second Cheapest Book
// second_cheapest_book.md
// Second-Cheapest Book
// Given an array of book objects, return the book object with the second-cheapest
// price. eg.

// CODE TEMPLATE

function secondCheapest(bookObj) {
    let cheapest = 20;
    let cheapest2 = cheapest * 2;
    let result = "";
    if (bookObj === []) {
        return undefined;
    }
    if (bookObj.length === 1){
        cheapest2 = bookObj[i]["price"];
        result = "title:" + bookObj[i]["title"] + ", " + "price:" + cheapest2;
        return result;
    }
    
    for (let i = 0; i < bookObj.length; i++) {
        if (bookObj[i]["price"] < cheapest) {
            cheapest = bookObj[i]["price"];
            //result = "title:" + bookObj[i]["title"] + ", " + "price:" + cheapest;
        }

    }
    for (let j = 0; j < bookObj.length; j++) {
        if (bookObj[j]["price"] < cheapest2 && bookObj[j]["price"] > cheapest) {
            cheapest2 = bookObj[j]["price"];
            result = "title:" + "'" + bookObj[j]["title"] + "'" + ", " + "price:" + cheapest2;
        }

    }
    return result;
}
console.log(secondCheapest([
    { title: 'Fox In Socks', price: 32.20 },
    { title: 'The Cat In The Hat', price: 16.20 },
    { title: 'Green Eggs and Ham', price: 28.50 },
    { title: 'Thinking Fast and Slow', price: 58.80 },
    { title: 'War and Peace', price: 5.20 }
]));
// should return the {title:'The Cat In The Hat', price:16.20}, in the input list.

// Note:

// If the array is empty, return undefined
// If there is only one item in the array, return that item
// All books will have a different price
// Do not sort the list
// The return value must point to an object in the original list, not a copy of
//that object