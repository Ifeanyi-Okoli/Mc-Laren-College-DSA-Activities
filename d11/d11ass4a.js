class Queue {
    constructor() {
        this.collection = []
        this.count = 0
        this.front = null
        this.rear = null
    }
    print() {
        console.log(this.collection.join(" <- "));
    }
    isEmpty() {
        return (this.collection.length === null)
    }
    enqueue(element) {
        let queue = new Queue(element)
        if (this.isEmpty()) {
            this.front = queue;
            // count++
        }
        else {
            // this.rear.next = queue;
            this.rear = queue;
            
        }
        this.count++
    }
    dequeue(element) {
        if (this.isEmpty()) {
            return;
        }
        else {
            // this.front = this.front.next;
            if (!this.front) {
                this.rear = null;
                this.count--;
            }
        }
    }
    seeFront() {
        if (this.isEmpty()) {
            return;
        }
        else {
            this.front;
        }
    }

    size() {
        return this.count
    }
}

let queue = new Queue()

queue.isEmpty();
queue.enqueue(100);
queue.enqueue(200);
queue.dequeue(300);
queue.seeFront();
queue.size()
console.log(queue.print())