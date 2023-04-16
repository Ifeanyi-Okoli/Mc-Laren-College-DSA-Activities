class ListNode{
    constructor(data){
        this.data = data,
        this.next = null
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head
    }

    clear(){
        this.head = null;
    }

    getLast(){
        let lastNode = this.head;
        if(lastNode){
            while (lastNode.next){
                lastNode=lastNode.next;
            }
        }
        return lastNode
    }
    getFirst(){
        return this.head;
    }

    //the size method
size(){
    let count = 0;
    let node = this.head;
    while (node){
        count++;
        node = node.next;
    }
    return count;
}
};
//creating 2 list nodes and establishing the pointer.
let node1 = new ListNode(2);
let node2 = new ListNode(5)
node1.next = node2

// using node1 to create a liked list

let list = new LinkedList(node1)

console.log(list.head.next.data);

//the size method
size(){
    let count = 0;
    let node = this.head;
    while (node){
        count++;
        node = node.next;
    }
    return count;
}

// the clear method



// get last method



//get firstmethod

