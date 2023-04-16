class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    addNode() {
        this.size++;
        let newNodeObject = new Node(value);
        if (this.root === null) this.root = newNodeObject;
        else {
            let currPtr = this.root;
            let parentPtr;
            while(currPtr !== null){
                parentPtr = currPtr;
                if(currPtr.value > value){
                    currPtr = currPtr.left;
                }else{
                    currPtr = currPtr.right;
                }
            }
            if(parentPtr.value > value){
                parentPtr.left = newNodeObject;
            }else{
                parentPtr.right = newNodeObject;
            }
        }
        
    }

    // preorder(currPtr = this.root) {
    //     if (currPtr === null) return;
    //     else {
    //         console.log(currPtr.data);
    //         this.preorder(currPtr.left);
    //         this.preorder(currPtr.right);

    //     }
    // }

    // preorder(currPtr = this.root) {
    //     if (currPtr === null) return;
    //     else {
    //         console.log(currPtr.data);
    //         this.preorder(currPtr.left);
    //         this.preorder(currPtr.right);

    //     }
    // }

    // inorder(currPtr = this.root) {
    //     if (currPtr === null) return;                 
    //         this.inorder(currPtr.left);
    //         console.log(currPtr.data);
    //         this.inorder(currPtr.right);
                    
    // }
    // postorder(currPtr = this.root) {
    //     if (currPtr === null) return;                 
    //         this.postorder(currPtr.left);            
    //         this.postorder(currPtr.right);
    //         console.log(currPtr.data);
                    
    // }
    
    // search(targetVal) {
    //     currPtr = this.root;
    //   while (currPtr !== null){
    //       if(currPtr.data === targetVal) return true;
    //   }
    //   return false;
    // }

    // maxVal() {
    //     let max = -Infinity;
    //     let currPtr = this.root;
    //     if (currPtr === null) return;
    //   }
    //   if 
    
}

let tree1 = new BinarySearchTree()

tree1.addNode(3);
tree1.addNode(5);
tree1.addNode(2);
tree1.addNode(6);
tree1.addNode(7);
console.log(tree1);