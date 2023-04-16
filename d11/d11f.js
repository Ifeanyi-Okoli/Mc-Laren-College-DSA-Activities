//Given a linked list write the code to delete an element from the beginning of 
//the linked list.

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
  
  function shift(head) {
    let temp = head;
    head = head.next;
    temp.next = null;
    return head;
  }
  

  
function display(head) {
    let tempPtr = head;
    while(tempPtr !== null){
        console.log(tempPtr.data);
        tempPtr = tempPtr.next;
    }
  }
  
  display(head);
  shift(head);
  display(head);
//   shift(head);
//   display(head);