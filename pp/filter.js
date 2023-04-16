const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];

  let userBelow30 = users.filter(item=>item.age<30);

  console.log(userBelow30);