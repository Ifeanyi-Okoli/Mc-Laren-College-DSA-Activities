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
// console.log(listA);
function mergeTwoLinkedLists(listA, listB){
    let mergedHead = null;
    if (!listA) return listB;
    else if(!listB) return listA;
    

    if(listA.value <= listB.value){
        mergedHead = listA;
        listA = listA.next;
                
    }
    else{
        mergedHead = listB;
        listB = listB.next;      
    }
    let mergedTail = mergedHead;
    while (listA && listB){
        let temp = null;
        if(listA.value <=listB.value){
            temp = listA;
            listA = listA.next;
        }  else{
            temp = listB;
            listB = listB.next;
        } 
        mergedTail.next = temp;
        mergedTail = temp;
    }
  
    if(listA){
        mergedTail.next = listA;
    }
    else if(listB){
        mergedTail.next= listB;
    }
    // console.log(temp.value);
    return mergedHead;
}

console.log(mergeTwoLinkedLists(listA, listB)); // Should return 1 -> 2 -> 3 -> 5 -> 7 -> 8