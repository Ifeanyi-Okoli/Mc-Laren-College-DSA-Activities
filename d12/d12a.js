class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    push(value) {
        let newNode = {
            next: null,
            data: value
        };
        if (head === null) {
            head = newNode;
            return;
        }
        let tempPtr = head;
        while (tempPtr.next !== null) {
            tempPtr = tempPtr.next;
        }
        tempPtr.next = newNode;
    };

    display() {
        let tempPtr = head;
        while (tempPtr.next !== null) {
            console.log(tempPtr.data);
            tempPtr = tempPtr.next;
        }
    };


}

let linkedList1 = new LinkedList();
console.log(linkedList1.size);