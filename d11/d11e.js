//Given a linked list write the code to delete a node with target value from the linked list.
// Return `true` if you successfully delete the value else return false if the node with 
//target value is not present.

// Note: If there are more than 1 node with the target value delete the first one from left.
//(i.e first occurence)

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

function deleteTarget(head, value) {
  let ptr1 = head;
  let ptr2 = head.next;
  while (ptr2 !== null) {
    if (ptr2.data === value) {
      ptr1.next = ptr2.next;
      ptr2.next = null;
    }
    ptr2 = ptr2.next;
    ptr1=ptr1.next;
  }

  return head;
}


function display(head) {
  let tempPtr = head;
  while(tempPtr !== null){
      console.log(tempPtr.data);
      tempPtr = tempPtr.next;
  }
}

// display(head);
// deleteTarget(head, 40);
// display(head);

console.log(deleteTarget(head, 40)); // true
console.log(deleteTarget(head, 20)); // false