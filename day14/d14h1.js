//Exercise : Book Discount
// book-discounts-1.md
// Part 1
// Draw the Object Diagram for the below book Object.

let book = {
    author: 'Daniel Kahneman',
    title: 'Thinking, Fast And Slow',
    yearPublished: 2012,
    bestseller: false,
    pricePerCountry:
    {
        'Australia': { amount: 20.0, currency: 'AUD' },
        'India': { amount: 500, currency: 'INR' },
        'United States': { amount: 16.5, currency: 'USD' }
    }
};
// Part2
// Given the book structure above, if the book was published before 2017 and is not a 
//bestseller, reduce the Indian price by 10% and the United States price by 20%.

if (book["yearPublished"] < 2017 && book["bestseller"] === false) {
    let ppcIndia = book["pricePerCountry"]["India"];
    let ppcUS = book["pricePerCountry"]["United States"];
    ppcIndia["amount"] = ppcIndia["amount"] * 0.9;
    ppcUS["amount"] = ppcUS["amount"] * 0.8;
    console.log(ppcIndia["amount"]);
    console.log(ppcUS["amount"]);
}
