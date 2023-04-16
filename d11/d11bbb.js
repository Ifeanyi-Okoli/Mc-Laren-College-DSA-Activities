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


let tempPtr = head;
console.log(tempPtr.data);
tempPtr = tempPtr.next;

console.log(tempPtr.data);
tempPtr = tempPtr.next;

console.log(tempPtr.data);
tempPtr = tempPtr.next;
console.log(tempPtr.data);
tempPtr = tempPtr.next;

// function display(head) {
  
//   while(tempPtr !== null){
//       console.log(tempPtr.data);
//       tempPtr = tempPtr.next;
//   }
// }
// console.log(display(head));