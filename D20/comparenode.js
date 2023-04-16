// Code example

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function compare(tree1, tree2){
    if(tree1 === tree2 && tree1.left === tree2.left && tree1.right === tree2.right){
        return true;
    }
    return false;
}


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

let nodeA = new Node(1);
let nodeB = new Node(2);
let nodeC = new Node(3);

// tree 1
node1.left = node2;
node1.right = node3;

// tree 2
nodeA.left = nodeB;
nodeB.left = nodeC;

// function call
console.log(compare(node1, nodeA)); // should return false;