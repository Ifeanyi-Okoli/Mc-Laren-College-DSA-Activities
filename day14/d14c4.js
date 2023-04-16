//Exercise : List of Book Objects Manipulation
// listOfBookObjectsManipulation.md
let books = [
    {
        "name": "A",
        "author": "aa",
        "price": 20,
        "outOfPrint": false,
        "borrower": "Alex"
    },
    {
        "name": "B",
        "author": "bb",
        "price": 30,
        "outOfPrint": true
    },
    {
        "name": "C",
        "author": "cc",
        "price": 40,
        "outOfPrint": false,
        "borrower": "Bob"
    },
    {
        "name": "D",
        "author": "dd",
        "price": 50,
        "outOfPrint": false
    }
];

for (let i = 0; i < books.length; i++) {
    console.log(books[i]["name"]);
}
// Task1
// Change the 'outOfPrint' status of the book "A" to true.
for (let i = 0; i < books.length; i++) {
    if (books[i]["name"] === "A") {
        let ref = books[i];
        ref["outOfPrint"] = true;
    }
}
console.log(books);

// Task2
// Create a variable called favoriteBook which points to the second book object. Using that 
//variable increase the price of the book by 10.
let favoriteBook = books[1];
favoriteBook["price"] += 10;
console.log(books);

// Task3
// Print the names of all the books along with their price in the following format.
for (let i = 0; i < books.length; i++) {
    let result = "The book name is ";
    let result1 = " and the price  is ";
    let output = result + books[i].name + result1 + "$" + books[i].price;
    console.log(output);
}

// "The book name is xyz and the price  is $dd"
// "The book name is xyz and the price  is $dd"
// ...
// Task4
// Print the names of all the books that are outOfPrint.
for (let i = 0; i < books.length; i++) {
    if (books[i]["outOfPrint"] === true) {
        console.log(books[i]["name"]);
    }
}
// Task5
// Print the names of all the books which have not been borrowed.
for (let i = 0; i < books.length; i++) {
    if (books[i]["borrower"] === undefined) {
        console.log(books[i]["name"]);
    }
}