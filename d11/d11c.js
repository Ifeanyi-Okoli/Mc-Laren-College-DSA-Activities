//Given a linked list write the code to push a new node at the end of the 
//linked list.

let head = {
    data: 10,
    next: {
        data: 20,
        next: {
            data: 30,
            next: {
                data: 40,
                next: null
            }
        }
    }
};

let value = 50;
function push(head, value) {
    let newNode = {
        next: null,
        data: value
    };
    let tempPtr = head;
    while (tempPtr.next !== null) {
        tempPtr = tempPtr.next;
    }
    tempPtr.next = newNode;
}

function print(head) {
    let temp = head;
    while (temp !== null) {
        console.log(temp.data);
        temp = temp.next;
    }

}
push(head, value)
print(head);
  //Note call the display function to test your code.