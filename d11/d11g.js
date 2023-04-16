//Given a linked list write the code to delete an element from the end of the 
//linked list.

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
  
  function pop(head) {
    let ptr1 = head;
    let ptr2 = head.next;
    while(ptr2.next !== null){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    ptr1.next = null;
  }


  function display(head) {
    let tempPtr = head;
    while(tempPtr !== null){
        console.log(tempPtr.data);
        tempPtr = tempPtr.next;
    }
  }
  
  display(head);
  pop(head);
  display(head);
  pop(head);
  display(head);
  pop(head);
  display(head);