// Write a function called cousinsOrNot which takes in the root of the binary Tree and the two nodes with the value say ‘a’ and ‘b’, and returns true if the two nodes are cousins of each other else returns false.

// Note: Two nodes are cousins of each other if they are at same level and have different parents.

// Example:

// Input:
//        11
//       /  \
//      8    12
//     / \     \
//    5   9     15
//   /     \     \
//  2       10    17
 
// node1Val: 2
// node2val: 10

// Output: true(they are cousins)
// ------------------------
// node1Val: 2
// node2val: 17

// Output: true(they are cousins)
// ------------------------
// node1Val: 5
// node2val: 9

// Output: false(because they are siblings)

class Node {
    constructor(item) {
      this.data = item;
      this.left = null;
      this.right = null;
    }
  }

  class Pair {
    constructor(first, second) {
      this.first = first;
      this.second = second;
    }
  }

  let root = null;

  function cousinsOrNot(root, node1Val, node2Val) {
    // write your code here
    if(root === null) return false;

    let par1 = null;
    let par2 = null;
    let q = [];
    let temp = new Node(-1);
    let ele;
    q.push(new Pair(node, temp));
    let levelSize;
    while(q.length>0){
        levelSize = q.length;
        while(levelSize !== 0){
            ele = q[0];
            q.shift();
            if(ele.first.data == A.data) par1 = ele.second;
            if(ele.first.data == b.data)
                parB = ele.second;
            // push children of current node
            // to queue.
            if(ele.first.left != null)
                q.push(new Pair(ele.first.left, ele.first));
            if(ele.first.right != null)
                q.push(new Pair(ele.first.right, ele.first));
            levelSize--;
            // If both nodes are found in
            // current level then no need
            // to traverse current level further.
            if(parA != null && parB != null)
                break;
        }
        // Check if both nodes are siblings
        // or not.
        if(parA != null && parB != null)
            return parA != parB;
        // If one node is found in current level
        // and another is not found, then
        // both nodes are not cousins.
        if ((parA != null && parB == null) || (parB != null
        && parA == null))
            return false;
    }
    return false;
}
// Driver code
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(15);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
var Node1, Node2;
Node1 = root.left.right.right;
Node2 = root.right.left.right;
if (isCousin(root, Node1, Node2))
    document.write("Yes");
else
    document.write("No");
        }
    }
}
    // Recursive function to check if
    // two Nodes are siblings
    isSibling(node, a, b) {
      // Base case
      if (node == null) {
        return false;
      }

      return (
        (node.left == a && node.right == b) ||
        (node.left == b && node.right == a) ||
        this.isSibling(node.left, a, b) ||
        this.isSibling(node.right, a, b)
      );
    }

    // Recursive function to find level
    // of Node 'ptr' in a binary tree
    level(node, ptr, lev) {
      // base cases
      if (node == null) {
        return 0;
      }

      if (node == ptr) {
        return lev;
      }

      // Return level if Node is present
      // in left subtree
      var l = this.level(node.left, ptr, lev + 1);
      if (l != 0) {
        return l;
      }

      // Else search in right subtree
      return this.level(node.right, ptr, lev + 1);
    }

    // Returns 1 if a and b are cousins,
    // otherwise 0
    isCousin(node, a, b)
    {
     
      // 1. The two Nodes should be on the
      //     same level in the binary tree.
      // 2. The two Nodes should not be siblings
      // (means that they should not have the
      // same parent Node).
      return (
        this.level(node, a, 1) == this.level(node, b, 1) &&
        !this.isSibling(node, a, b)
      );
    }
  }


  // Driver Code
  var tree = new GFG();
  tree.root = new Node(1);
  tree.root.left = new Node(2);
  tree.root.right = new Node(3);
  tree.root.left.left = new Node(4);
  tree.root.left.right = new Node(5);
  tree.root.left.right.right = new Node(15);
  tree.root.right.left = new Node(6);
  tree.root.right.right = new Node(7);
  tree.root.right.left.right = new Node(8);

  var Node1, Node2;
  Node1 = tree.root.left.left;
  Node2 = tree.root.right.right;
  if (tree.isCousin(tree.root, Node1, Node2)) {
    document.write("Yes");
  } else {
    document.write("No");
  }

