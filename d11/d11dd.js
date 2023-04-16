//Given a linked list write the code to add a new node at the beginning of the 
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

function unshift(head, value) {
  let newNode = {
    next: null,
    data: value
  };
  let tempPtr= head;
  newNode.next = head;
  head = newNode;
  while (head === newNode){
    tempPtr = tempPtr.next;
  }
  tempPtr.next = newNode;
}

function display(head) {
  let tempPtr = head;
  while(tempPtr !== null){
      console.log(tempPtr.data);
      tempPtr = tempPtr.next;
  }
}

display(head);
unshift(head, 50);
display(head);
unshift(head, 91050);
display(head);
//Note call the display function to test your code.
