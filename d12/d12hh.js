let head = {
    data: 6,
    next: null,
    prev: null
}
let node0 = {
    data: 5,
    next: null,
    prev: null
}
let node1 = {
    data: 11,
    next: null,
    prev: null
}
let node2 = {
    data: 8,
    next: null,
    prev: null
}
let node3 = {
    data: 32,
    next: null,
    prev: null
}
let node4 = {
    data: 23,
    next: null,
    prev: null
}
// Implement a function `addToDLL` which takes in the doublyLinkedList and value and adds 
//the value such that DLL is always sorted in the ascending order.
function addToDLL(linkedList, value) {
    let temp = linkedList;

    while (temp.next !== null) {
        if (temp.data > value) {
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
    return linkedList;
}


function display(head) {
    let temp = head;
    while (temp !== null) {
        console.log(temp.data)
        temp = temp.next;
    };
}

let linkedList = node1;

addToDLL(linkedList, 2);
addToDLL(linkedList, 9)
display(head);