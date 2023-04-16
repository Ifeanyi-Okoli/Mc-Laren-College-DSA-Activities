let inventory = [
    { 'item1' : 1234, 'item2' : 'apple' },
    { 'item1' : 1234, 'item2' : 'banana' },
    { 'item1' : 1234, 'item2' : 'custard' },
    { 'item1' : 2156, 'item2' : 'melon' },
    { 'item1' : 4345, 'item2' : 'asparagus' } 
  ];

  
  function compare(a, b) {
    if(a.item2 < b.item2) return -1;

    if(a.item2 > b.item2) return 1;

    return 0;
  }
  
  inventory.sort(compare);
  console.log(inventory);