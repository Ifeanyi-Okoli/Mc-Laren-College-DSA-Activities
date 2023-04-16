//Given a linked list write the code to print the data property for each node in the linked list.

// let head = {
//   data: 10,
//   next: {
//     data: 20,
//     next: {
//       data: 30,
//       next: {
//         data: 40,
//         next: null
//       }
//     }
//   }
// };

let node4 = {
    data: 40,
    next: null
}

let node3 = {
    data: 30,
    next: node4
}

let node2 = {
    data: 20,
    next: node3
}

let head = {
    data: 10,
    next: node2
};

function display(head) {
  let tempPtr = head;
  while(tempPtr !== null){
      console.log(tempPtr.data);
      tempPtr = tempPtr.next;
  }
}
display(head);