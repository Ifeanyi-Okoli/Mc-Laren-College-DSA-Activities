const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
  console.log(sumOfAges);