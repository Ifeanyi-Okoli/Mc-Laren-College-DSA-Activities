// Given a singly linked list of characters, write a function that returns true if the given list 
// is a palindrome, otherwise return false.

let linkedList = {
    data: 'r',
    next: {
        data: 'a',
        next: {
            data: 'a',
            next: {
                data: 'r',
                next: null
            }
        }
    }
};

function isPalindromicList(linkedList) {
    //stack approach
    let ptr1 = linkedList;
    let ptr2 = linkedList;
    let temp = [];
    while (ptr2) {
        if (!ptr2.next) {
            slow = slow.next;
            break;
        }
        temp.push(ptr1.data)
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next;
    }
    while (ptr1) {
        if (temp.pop() !== ptr1.data) {
            return false;
        }
        ptr1 = ptr1.next;
    }
    return true;
}

console.log(isPalindromicList(linkedList));

//midpoint approach

let findMidpoint = (linkedList)=>{
    let ptr1 = linkedList;
    let ptr2 = linkedList;
    while(ptr2 && ptr2.next){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next;
    }
}

function isPalindromicList2(linkedList) {
    let midpoint = findMidpoint(linkedList);
    let tail = reverse(midpoint);
    return compare(linkedList, tail);
}

console.log(isPalindromicList2(linkedList));