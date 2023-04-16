// Merge Sorted Linked Lists
// Create a function called mergeTwoLinkedLists which merges two linked lists

// Return a new linked list (don't modify the input lists)
// Input lists will be sorted
// Function should have O(N) time complexity, which means you can go over each list only once.
// Do not use recursion
class LinkedList {
    constructor(val, next) {
        this.val = val;
        this.next = next;                
    }
}


let listA = {
value : 2,
    next: {
    value : 3,
        next : {
        value : 7,
        next: undefined
    }
}
};

let listB = {
    value: 1,
    next: {
        value : 5,
        next: {
            value : 8,
            next: undefined
        }
    }
};

let mergedList ={
    value: null,
    next: null
}
console.log(listA);
function mergeTwoLinkedLists(listA, listB){
    // // let mergedList = new Linkedlist;
    // if (list1 === null && list2 === null){
    //     return 
    // }
    // let temp = mergedList;
    while (listA && listB){
        if(listA.value < listB.value){
            mergedList.next=listA;
            listA = listA.next            
        }
        else{
            mergedList.next=listB;
            listB=listB.next
        }
        mergedList=mergedList.next
    }
    console.log()
    if(listA){
        mergedList.next = listA;
    }
    if(listB){
        mergedList.next= listB;
    }
    // console.log(temp.value);
    return mergedList.next;
}

console.log(mergeTwoLinkedLists(listA, listB)); // Should return 1 -> 2 -> 3 -> 5 -> 7 -> 8