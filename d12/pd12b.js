// Create a Node class that will have following properties.

// Properties
// data - to represent the data in the node
// next - a reference to the next node
// Create a LinkedList class that will will have following properties and methods.

// Properties
// size - to represent the size of the linked list
// head - to keep a refrence of the head node
// Methods
// push() - To add a new node to end of linked list
// unshift() - To add a new node at the beginning of the linked list
// pop() - To delete an element from the end of the linked list
// shift() - To delete an element from the beginning of the linked list
// deleteTarget() - To delete a node with a target value
// print() - To print a linked list node's value
// let myList = new LinkedList();

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
      this.size++;
        let newNode = {
            next: null,
            data: value
        };
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let tempPtr = this.head;
        while (tempPtr.next !== null) {
            tempPtr = tempPtr.next;
        }
        tempPtr.next = newNode;
        
    };

    unshift(value){
      this.size++;
        let newNode = {
            next: null,
            data: value
        };
          newNode.next = this.head;
          this.head = newNode;
        while(this.head === newNode){
            tempPtr = tempPtr.next;
        }
        tempPtr.next = newNode;
        
      }

      pop(head) {
        this.size--;
        let ptr1 = head;
        let ptr2 = head.next;
        while(ptr2.next !== null){
            ptr1 = ptr1.next;
            ptr2 = ptr2.next;
        }
        ptr1.next = null;
        
      }

      shift(head) {
        let temp = head;
        head = head.next;
        temp.next = null;
        this.size--;
        return head;
      }

      deleteTarget(head, value) {
        this.size--;
        let ptr1 = head;
        let ptr2 = head.next;
        while (ptr2 !== null) {
          if (ptr2.data === value) {
            ptr1.next = ptr2.next;
            ptr2.next = null;
          }
          ptr1=head.next;
          
        }
      
        return head;
      }

    print() {
        let tempPtr = this.head;
        while (tempPtr.next !== null) {
            console.log(tempPtr.data);
            tempPtr = tempPtr.next;
        }
        console.log(this.size);
    };
}


// console.log(this.size);
let myList = new LinkedList();

myList.push(10);
myList.push(20);
myList.push(100);
myList.push(40);
myList.push(50);
myList.push();
myList.print();
// should print 10 -> 20
// myList.print();

// let tempPtr = this.head;
// console.log(tempPtr.data);
// tempPtr = tempPtr.next;