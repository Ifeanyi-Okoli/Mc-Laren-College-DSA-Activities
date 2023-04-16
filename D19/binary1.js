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
        let newNodeObject = new Node(data);
        if (this.root === null) this.root = newNodeObject;
        else {
            this.checkAddData(this.root, newNodeObject)
        }
        size++;
    }

    checkAddData(cNode, newNodeObject) {
        if (newNodeObject.data < cNode.data) {
            if (cNode.left === null) cNode.left = newNodeObject;
            else {
                this.checkAddData(cNode.left, newNodeObject)
            }
        }
        else {
            if (cNode.right === null) cNode.right = newNodeObject;
            else {
                this.checkAddData(cNode.right, newNodeObject);
            }
        }
    }
    deleteNode(){
        this.root = this.checkDeleteNode(this.root, data);
    }
    checkDeleteNode(cNode, data){
        if(cNode === null) return null;
        else if(data < cNode.data){
            cNode.left = this.checkDeleteNode(cNode.left, data);
            return cNode;
        }
        else if(data > cNode.data){
            cNode.right = this.checkDeleteNode(cNode.right, data);
            return cNode;
        }
        else{
            if(cNode.right === null && cNode.left === null){
                cNode = null;
                return cNode;
            }
            if(cNode.left === null){
                cNode = cNode.right; 
                return cNode;
            }
            else if(cNode.right === null){
                cNode = cNode.left; 
                return cNode;
            }
        }
    }
}

let tree1 = new BinarySearchTree()

tree1.addNode(3);

tree1.addNode(5);
tree1.addNode(2);
tree1.addNode(6);
tree1.addNode(7);