// Create a doubly linked list with head node being called `head` with values 
//5, 11, 8, 32, 23


// Write a function called `addValue` which takes a value and updates a global `head` 
//variable by adding that value to the begininng of the list

let head = {
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


//node 1 links
node1.prev = head;
node1.next = node2;

//node 2 links
node2.prev = node1;
node2.next = node3;

//node 3 links
node3.prev = head;
node3.next = node4;

//node 4 links
node4.prev = node3;
node4.next;

function display(head) {
    let temp = head;
    while(temp !== null){
        console.log(temp.data)
        temp = temp.next;
    };
}


display(head);

let addValue = (value)=>{
    let newNode ={
        data: value,
        next: null,
        prev: null
    }
newNode.next = head;
head.prev = newNode;
head = newNode;
return head;
}

addValue(100);
console.log("--------");
display (head);

