// Create LL from Array with 0's
// You are given an array of numbers arr which contains which contains a series of integers separated by 0's. i.e [0,3,1,0,4,5,2,0] The beginning and end of the list will have 0's as elements.

// Your task is to write a function arrayToLL which generates a Linked List object which is structured such that for every two consecutive 0's, add all the numbers lying in between them into a single node whose value is the sum of all the added numbers.

// The linked list should not contain any 0's.

// Note
// Do it in O(n) time complexity
// Examples
// Diagram

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

function arrayToLL(arr) {
    let sum = 0
    sumArray = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i + 1] === 0) {
            sumArray.push(sum);
            sum = 0;
        }
    }
    console.log(sumArray);
    let head = new Linkedlist
    head = {
        data: sumArray[0],
        next: {
            data: sumArray[1],
            next: null
        }
    }
    return head;
}

function print(head) {
    let temp = head;
    while (temp !== null) {
        console.log(temp.data)
        temp = temp.next;
    }
}

let arr = [0, 3, 1, 0, 4, 5, 2, 0];

let head = arrayToLL(arr);// should return linked list containing 4 -> 11`
// As shown in the diagram, you have to first add the elements in green and set it to node a and then add the elements in red and set it to node b, then create a Linked List with the two nodes, with a as the head and b as the next element. The output is a Linked List with nodes 4 and 11.

// Example 2:
// print();
let arr2 = [0, 1, 0, 3, 0, 2, 2, 0];
let head2 = arrayToLL(arr2);// should return linked list containing 1 -> 3 -> 4