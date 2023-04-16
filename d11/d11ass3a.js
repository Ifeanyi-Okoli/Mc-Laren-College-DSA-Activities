// Exercise 3 - Stack DS
// You are probably familiar with stack of books on your table. You are also probably used 
// to hitting the back button on your phone to go back to the previous view in your app.

// You know what they all have in common? They all store the data in a way so that you can 
// traverse backwards.

// The topmost book in the stack was the one that was put there last. If you remove that 
// book from your stack's top, you would expose the book that was put there before the last 
// book and so on.

// If you think about it, in all the above examples, you are getting Last-In-First-Out type 
// of service. We will try to mimic this with our code.

// This data storage scheme is called a Stack

// In this challenge, we will be creating our own Stack class. Although you can use arrays 
// to create stacks, sometimes it is best to limit the amount of control we have with our 
// stacks.

// Write:

// a push method that pushes an element to the top of the stack
// a pop method that removes and returns the element on the top of the stack
// a peek method that returns the top element of the stack
// an isEmpty method that checks if the stack is empty,
// a clear method that removes all elements from the stack.
// Normally stacks don't have print method, but we've added a print helper method that 
// console logs the collection.

class Stack {
    constructor() {
        this.collection = []
        this.count = 0
    }
    print() {
        console.log(this.collection.join("\n---\n"));
      }
      // Add required methods here
    push(element) {
        this.collection[this.count] = element
        console.log(`${element} added to stack of ${this.count}`);
        this.count += 1;
        return this.count - 1;
    }
    //Return and remove top element in stack
    pop() {
        if (this.count === 0) return undefined;
        let popedCollection = this.collection[this.count - 1];
        this.count -= 1;
        console.log(`${popedCollection} removed`);
        return popedCollection;
    }
    
    peek() {
        console.log(`Top element is ${this.collection[this.count - 1]}`);
        return this.collection[this.count - 1]
    }
    isEmpty() {
        console.log(this.count === 0 ? "Stack is empty" : "Stack is NOT empty")
        return this.count === 0;
    }
    
    clear() {
        this.collection = []
        this.count = 0
        console.log("Stack cleared...")
        return this.collection
    }
    
}
let stack = new Stack()

stack.isEmpty();
stack.push(100);
stack.push(200);
stack.push(300);

stack.pop();
stack.pop();
stack.peek();


stack.clear()
console.log(stack.print())

