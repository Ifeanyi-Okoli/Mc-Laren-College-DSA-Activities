// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
// and each of their nodes contains a single digit. Add the two numbers and return a new linked list representing the sum in 
// reverse order.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Note: You are not allowed to use arrays or eval function, you will have to manually go through node and calculate the sum.

// Examples:

// Input:
// let List1: 1 -> 2 -> 3 -> 3 -> 4
// List2: 2 -> 3 -> 4 -> 5 -> 5

// Output: 3 -> 5 -> 7 -> 8 -> 9
// -----------------------------
// Input:
// List1: 0
// List2: 0

// Output: 0
// ------------------------------
// Input:
// List1: 1 -> 2 -> 3
// List2: 2 -> 3 -> 4 -> 5 -> 5

// Output: 3 -> 5 -> 7 -> 5 -> 5
// ------------------------------
// Input:
// List1: 1 -> 2 -> 9 -> 1
// List2: 2 -> 3 -> 4 -> 5 -> 5

// Output: 3 -> 5 -> 3 -> 7 -> 5

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

function addLL(ll1, ll2){
    let newLL = new LinkedList();
    ll1 = ll1.head;
    ll2 = ll2.head;
while(ll1 !== null && ll2 !== null){
    let data = ll1.data + ll2.data;
    // let val1 = ll1 ? ll1.data : 0;
    // let val2 = ll2 ? ll2.data : 0;
            newLL.push(data);
            if(ll1){
                ll1 = ll1.next;
            }
            if(ll2){
                ll2 = ll2.next;
            }
    }
return newLL;
}

// function push(head, value) {
//     let newNode = {
//         next: null,
//         data: value
//     };
//     let tempPtr = head;
//     while (tempPtr.next !== null) {
//         tempPtr = tempPtr.next;
//     }
//     tempPtr.next = newNode;
// }

function print(head){
    let temp = head;
    while(temp!== null){
        console.log(temp.data);
        temp = temp.next;
    }
    
}

let newLL = new LinkedList;
// let ll1 = new LinkedList;
// let ll2 = new LinkedList;

let ll1 = {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 3,
          next: {
              data:4,
              next: null
          }
        }
      }
    }
  };

 let  ll2 = {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: {
          data: 5,
          next: {
              data:5,
              next: null
          }
        }
      }
    }
  };

newLL=  addLL(ll1, ll2);
print(newLL);
print();


class Solution {
    public ListNode addTwoNumbers(ListNode L1, ListNode L2){
        
    }
}