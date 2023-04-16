// Binary search tree or not
// Write a function called isBST which takes in the root of binary tree and returns true if the tree is binary search tree or false if it is not.

// Input:
//     10
//     / \
//   20   19
//   /
//  19
 
// Output: false(as left of node with value 10 is greater than 10.)


// Input:
//     10
//     / \
//    8   19
//   /
//  9
 
// Output: false(Because left of subtree with root value 8 is greater)

// Input:
//     10
//     / \
//    8   19
//   /
//  6
 
// Output: true

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  

//   class BinarySearchTree {
//     constructor(){
//       this.root = undefined;
//       this.size = 0;
//     }
// }

  // function isBST(root){
  //     if(root === null){
  //         return true;
  //     }
  //     if(root.left !== null && root.data < root.left.data){
  //         return false;
  //     }
  //     if(root.right !== null && root.data > root.right.data){
  //       return false;
  //   }
  //   return isBST(root.left) && isBST(root.right);
  // }

function isBST(root){
    let allElements = [];
    isBSTInorder(root, allElements);
    for(let i = 1; i<allElements.length; i++){
        let prev = allElements[i-1];
        let curr = allElements[i];
        if(curr<prev){
            return false
        }
    }
    return true;
}

  function isBSTInorder(root, result=[]){
    if(root === null){
        return result;
    }
    isBSTInorder(root.left, result);
    result.push(result.data)
    isBSTInorder(root.right, result);
  return result;
}


function height(root){
  let nextHeight = 0;
  if(root === null) return -1;

  let left = height(root.left);
  let right = height(root.right);
  return 1 + Math.max(left, right);
}


let root1 = new Node(10);
root1.left = new Node(20);
root1.right = new Node(19);
root1.left.left = new Node( 9);

console.log(isBST(root1), false)
console.log(height(root1), 2)

// let root2 = new Node(10);
// root2.left = new Node(8);
// root2.right = new Node(19);
// root2.left.left = new Node(9);

// console.log(isBST(root2), false)

// let root3 = new Node(10);
// root3.left = new Node(8);
// root3.right = new Node(19);
// root3.left.left = new Node(6);

// console.log(isBST(root3), true)

// let root4 = new Node(10);
// root4.left = new Node(8);
// root4.right = new Node(19);
// root4.left = new Node(5);
// root4.right.right = new Node(50);

// console.log(isBST(root4), false)
