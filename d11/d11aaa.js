/*
Create object representation of the linked list. The linked list must contain 4 
nodes where 
each node has value 10, 20, 30, 40 respectively. We keep the information of 
the linked list in the head node.
*/

// write your code here.

let node4 = {
    next: null,
    data: 40
}


let node3 = {
    next: node4,
    data: 30,
}


let node2 = {
    next: node3,
    data: 20,
}

let head = {
    next: node2,
    data: 10
}

console.log(`${head.data} `);
console.log(`${node2.data} `)
console.log(`${node3.data} `)
console.log(`${node4.data} `)