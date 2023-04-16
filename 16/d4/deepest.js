// To save time you are given the tree objects shown above:

let tree1 = {
    value: 100,
    left: {
        value: 90,
        left: {
            value: 70,
            left: null,
            right: null,
        },
        right: {
            value: 95,
            left: null,
            right: null,
        }
    },
    right: {
        value: 1100,
        left: null,
        right: {
            value: 1200,
            left: null,
            right: null,
        }
    },
}



let tree2 = {
    value: 100,
    left: {
        value: 90,
        left: {
            value: 70,
            left: null,
            right: null,
        },
        right: {
            value: 95,
            left: null,
            right: null,
        }
    },
    right: {
        value: 1100,
        left: null,
        right: {
            value: 1200,
            left: null,
            right: {
                value: 1300,
                left: null,
                right: null,
            }
        }
    },
}

function deepestLevel(tree){
    let root = tree;
    let size = 0;
    let temp = [];
    if (root === null) return false;
    else{
        size++;
        if(root.left !== null){
            size++;
            let tempPtr = root.left;
            console.log(tempPtr.value)
            while(tempPtr !== null){
                size++;
                tempPtr = tempPtr.left
            }
            temp.push([size, tempPtr.left.value])
            if(tempPtr.right === null){
                temp.push([size, tempPtr.left.value])
            }
            }
        }
        // console.log(temp);
    }



console.log(deepestLevel(tree1)); // should print false
console.log(deepestLevel(tree2)); // should print true