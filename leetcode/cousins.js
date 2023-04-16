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
 
node1Val: 2
node2val: 10

// Output: true(they are cousins)
// ------------------------
// node1Val: 2
// node2val: 17

// Output: true(they are cousins)
// ------------------------
// node1Val: 5
// node2val: 9

// Output: false(because they are siblings)

function cousinsOrNot(root, node1Val, node2Val) {
    let depthX = findDepth(root, node1Val, 0);
    let depthY = findDepth(root,node2Val,0);
    let parentX = findParent(root, node1Val, root.val);
    let parentY = findParent(root, node2Val, root.val);
    if((depthX === depthY) && parentX !== parentY){
        return true;
    }else{
        return false;
    }


function findDepth(root, node1Val, depth = 0){
    if(root.val === node1Val){
        return depth;
    }else{
        return(root.left && findDepth(root.left,node1Val,depth+1)) || (root.right && findDepth(root.right,node1Val,depth+1))
    }
}
//parent
function findParent(root,node1Val,parent){
    if(root.val ===node1Val){
        return parent;
    }else{
        return (root.left && (findParent(root.left, node1Val, root.val)) || root.right && (findParent(root.right, node1Val, root.val)))
    }
}
}