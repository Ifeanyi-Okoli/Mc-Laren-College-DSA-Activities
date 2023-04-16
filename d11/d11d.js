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
      if(head === null){
          return head;
      }
    let temp = head;
    head = head.next;
    temp.next = null;
    return head;
  }

  function display(head){
    let temp = head;
    while(temp !== null){
      console.log(temp.data);
      temp = temp.next;
    }
  }

  // let myLL = shift(myLL);
 


  function pop(head) {
      if(head === null || head.next === null){
          return null;
      }
    let ptr1=head;
    let ptr2 = head.next;
    while(ptr2.next !== null){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    ptr1.next = null;
}
console.log("--- NEW LL BELOW After Shift---");
// display(head);

shift(head);
shift(head);
display(head);
pop(head);
display(head);
  