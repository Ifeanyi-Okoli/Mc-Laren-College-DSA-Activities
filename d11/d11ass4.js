// Exercise 4 - Queue Class
// Like stacks, queues are a collection of elements. But unlike stacks, queues follow 
//the FIFO (First-In First-Out) principle. Elements added to a queue are pushed to the 
//tail, or the end, of the queue, and only the element at the front of the queue is 
//allowed to be removed.

// We could use an array to represent a queue, but just like stacks, we want to limit 
//the amount of control we have over our queues.

// Write:

// an enqueue method that pushes an element to the tail of the queue
// a dequeue method that removes and returns the front element
// a front method that lets us see the front element
// a size method that shows the length
// an isEmpty method to check if the queue is empty.

// let arr = [3, 4, 7, 8, 11, 43, 56, 89, 0, 21]

// int A[10]

// let front = -1
// let rear = -1
// isEmpty();{
//     if(front === -1 && rear === -1){
//         return true
//     }
//     else{
//         return false;
//     }
// }

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
    }
    isEmpty(){
        return !this.front;
    }

    enqueue(value){
        //create a new node with value
        let node = new Node(value)

        //check if queue is empty
        if(this.isEmpty()){
            //point front and back to new node
            this.fron = this.back = node;
        }
        else {
            this.back.next = node;
            //push node to the backof the queue
            this.back = node;
        }
        
        this.print();
    }

}