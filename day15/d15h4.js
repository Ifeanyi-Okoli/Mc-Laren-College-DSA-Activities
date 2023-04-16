//Book Discount with given Country
// bookDiscountWithGivenCountry.md
// Given a book with the structure below and the variable country, reduce the price of
// the book for that country by 40%. If there is no existing price for that country then 
//the book object should not be modified. Check your code for different values of country. ('Australia','United States','Kenya')

let book = {
    author: 'Daniel Kahneman',
    title: 'Thinking, Fast And Slow',
    yearPublished: 2012,
    bestseller: true,
    pricePerCountry:
        {
            'Australia': {amount: 20.0, currency: 'AUD'},
            'India': {amount: 500, currency: 'INR'},
            'United States': {amount: 16.5, currency: 'USD'},
            'Canada' :{amount :19, currency :'CAD'}
        }
};
let country = 'India';
let bookprice = book["pricePerCountry"][country];
let newprice = bookprice["amount"] * 0.6;
console.log(newprice);
