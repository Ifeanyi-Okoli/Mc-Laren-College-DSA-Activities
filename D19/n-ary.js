//Given an n-ary tree, return the level order traversal of its nodes value
//Nary tree input serialization is represented in their level order traversal, each group of children is seperated by the null value. see examples.

function levelOrder(root){
    if(!root) return [];
    let queue = [root];
    let result = [];
    while(queue.length){
        let len = queue.length;
        result.push(queue.map(node => node.val));

        while(len--){
            let node = queue.shift();
            for(let child of node.children){
                queue.push(child);
            }
        }
    }
    return result;
}

let root = [1, null, 3,2,4, null, 5,6,];
//output: [[1],[3,2,4],[5,6]]
console.log(levelOrder(root));