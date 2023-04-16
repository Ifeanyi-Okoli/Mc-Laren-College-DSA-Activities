let head = {
    data: 6,
    next: null,
    prev: null
  }
  
  
  // Implement a function `addToDLL` which takes in the doublyLinkedList and value 
  //and adds the value such that DLL is always sorted in the ascending order.
  
  
  let linkedList = head;
  
  
  function addToDLL(linkedList, value){
    let temp = linkedList;
    if(temp === null || temp.data >= value){
        let newNode = {
            data: value,
            next: null,
            prev: null
          }
          newNode.next = temp;
          temp = newNode;
    }else{

    
    while (temp.next !== null){
        if (temp.data > value){
          let newNode = {
            data: value,
            next: null,
            prev: null
          }
          newNode.next = temp;
          let tempPrev = temp.prev;
          temp.prev = newNode;
          tempPrev.next = newNode;
          newNode.prev = tempPrev;
        }      
        temp = temp.next;
    }
}
    return linkedList;
  }
  
  
  function display(head) {
    let temp = head;
    while(temp !== null){
        console.log(temp.data)
        temp = temp.next;
    };
  }
  
  
  addToDLL(linkedList, 10);
  addToDLL(linkedList, 3);
  display(linkedList);
  display(head);