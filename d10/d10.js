// Here is a list of books.  Find the cheapest book using the reduce method

let books = [
    {title:"Shantaram", price:28.3, year:1998},
    {title:"Age of innocencde", price:12.00, year:1902},
    {title:"All creatures great and small", price:17.3, year:1952},
    {title:"Foo bar", price:60, year:1998},
];

let totalPrice = books.reduce((acc,item) =>{
    return acc + item.price;    
}, 0)
console.log(totalPrice);

let cheapestBook = books.reduce((prev,curr) =>{
    if(prev.price < curr.price){
        return prev;
    }
    else {
        return curr;
    }
})

console.log(cheapestBook);

