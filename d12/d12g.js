// Write a function called `convertToDLL` which takes in an array and convert it 
//to Doubly Linked List.

function convertToDLL(arr) {
    if (arr.length === 0) {
        return null;
    }
    let head = {
        data: arr[0],
        next: null,
        prev: null
    };

    let temp = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = {
            data: arr[i],
            next: null,
            prev: null
        };
        temp.next = newNode;
        newNode.prev = temp;
        temp = newNode;

    }
    return head;
}

function display(head) {
    let temp = head;
    while(temp !== null){
        console.log(temp.data)
        temp = temp.next;
    };
}

let result = convertToDLL([2, 3, 5, 11]); // Should return a Doubly Linked List with node having 
//values 2, 3, 5 and 11
display(result);