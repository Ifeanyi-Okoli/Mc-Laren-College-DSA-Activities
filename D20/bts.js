// Given a binary tree print the level order traversal of the tree.

// Example:

// Input:
//        11
//       /  \
//      8   12
//     / \     \
//    5   9     15
//   /     \     \
//  2       10    17
// Output:
// 11, 8, 12, 5, 9, 15, 2, 10, 17

class Node {
    constructor(data) {
      this.data = data;
      this.left = undefined;
      this.right = undefined;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = undefined;
      this.size = 0;
    }
    addNode() {
        this.size++;
        let newNodeObject = new Node(data);
        if (this.root === null) this.root = newNodeObject;
        else {
            let currPtr = this.root;
            let parentPtr;
            while(currPtr !== null){
                parentPtr = currPtr;
                if(currPtr.data > data){
                    currPtr = currPtr.left;
                }else{
                    currPtr = currPtr.right;
                }
            }
            if(parentPtr.data > data){
                parentPtr.left = newNodeObject;
            }else{
                parentPtr.right = newNodeObject;
            }
        }
        
    }
}

let tree1 = new BinarySearchTree();

tree1.addNode(5);
tree1.addNode(2);
tree1.addNode(6);
tree1.addNode(7);
tree1.addNode(4);
tree1.addNode(2.5);
tree1.addNode(0);
tree1.addNode(100);


function levelOrderTraversal(root) {
    let queue = [root];
    while (queue.length !== 0) {
        let curr = queue.shift();
        console.log(curr.data);
        if (curr.left !== null) {
            queue.push(curr.left);
        }
        if (curr.right !== null) {
            queue.push(curr.right)
        }
    }
}
levelOrderTraversal(tree1.root);



// console.log(tree1)
// console.log(height(root1), 2)