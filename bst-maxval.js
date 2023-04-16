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
    addNode(data){
        this.size++;
      // write your code to add a new node to binary search tree
      let newNodeObject = new Node(data);
      if(this.root === undefined){
        this.root = newNodeObject;
      }else{
          let currPtr = this.root;
          let parentPtr;
          while(currPtr !== undefined){
              parentPtr = currPtr;
              if(currPtr.data > data){
                  currPtr = currPtr.left;
              }else{
                  currPtr = currPtr.right;
              }
          }
          if(parentPtr.data > data){
              parentPtr.left = newNodeObject;
          } else
                parentPtr.right = newNodeObject;
      }
    }
    search(targetVal){
        let tempPtr = this.root;
        while(tempPtr !== null){
            console.log(tempPtr.data);
            if(tempPtr.data === targetVal){
                return true;
            }
            if(tempPtr.data < targetVal){
                tempPtr = tempPtr.right;
            }else{
                tempPtr = tempPtr.left;
            }
        }
        return false;
    }

    search(targetVal, currPtr = this.root){
        if(currPtr === null){
            return false;
        }
        if(currPtr.data === targetVal){
            return true;
        }
        if(currPtr.data < targetVal){
            return this.search(targetVal, currPtr.right)
        }else{
            return this.search(targetVal, currPtr.left);
        }
        
    }


    maxVal() {
        if(this.size === 0) return undefined;
      // write your code to print maximum value from given BST.
      let tempPtr = this.root;
      while(tempPtr.right !== undefined){
          tempPtr = tempPtr.right;
      }
      return tempPtr.data;
    }
    
    minVal() {
        if(this.size === 0) return undefined;
        let tempPtr = this.root;
        while(tempPtr.left !== undefined){
            tempPtr = tempPtr.left;
        }
        return tempPtr.data;
      }
  }

  let tree1 = new BinarySearchTree();

  tree1.addNode(3);
  tree1.addNode(5);
  tree1.addNode(2);
  tree1.addNode(6);
  tree1.addNode(7);
  tree1.addNode(4);
  tree1.addNode(2.5);

  console.log(tree1.search(2));
//   console.log(tree1.search(10));
  console.log(tree1.maxVal());
  console.log(tree1.minVal());