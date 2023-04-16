let head = {
    data: 10,
    next: {
      data: 20,
      next: {
        data: 30,
        next: {
          data: 40,
          next: null
        }
      }
    }
  };
  
  function display(head) {
    for(key in head){
        console.log(`node ${key}  data =${head.data} and it point to:${head.next}`)
    }
  }
  console.log(display(head));

  function display(){
      let tempPtr = head;
  while(tempPtr !== null){
    console.log(tempPtr.data);
    tempPtr = tempPtr.next;
  }
}

function push(value){
    let newNode = {
        next: null,
        data: value
    };
    if (head === null){
      head = newNode;
      return;
    }
    let tempPtr = head;
    while(tempPtr.next !== null){
        tempPtr = tempPtr.next;
    }
    tempPtr.next = newNode;
}

function unshift(value){
  let newNode = {
      next: null,
      data: value
  };
    newNode.next = head;
    head = newNode;
  while(head === newNode){
      tempPtr = tempPtr.next;
  }
  tempPtr.next = newNode;
}

display();
push(50);
display();
unshift(60);
display();