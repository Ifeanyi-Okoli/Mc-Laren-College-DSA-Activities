function removeDuplicates(linkedlist){
    let temp = linkedlist;
    while (temp !== null){
        let temp1 = temp;
        while(temp1!=null && temp1.data===temp.data) {
          temp1 = temp1.next;
      }
      temp.next = temp1;
      temp = temp.next;
  }
}
    

function display(linkedlist) {
  let tempPtr = linkedlist;
  while(tempPtr !== null){
      console.log(tempPtr.data);
      tempPtr = tempPtr.next;
  }
}


let linkedList = {
  data: 5,
  next: {
    data: 7,
    next: {
      data: 7,
      next: {
        data: 18,
        next: null
      }
    }
  }
};

removeDuplicates(linkedList); 

display(linkedList);

/*

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
console.log(deleteTarget(head, 20)); // fals



*/