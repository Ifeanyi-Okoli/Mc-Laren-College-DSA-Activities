let list = {
    value: 5,
    next: {
        value: 7,
        next: {
            value: 13,
            next: {
                value: 22,
                next: {
                    value: 11,
                    next: {
                        value: 18,
                        next: null
                    }
                }
            }
        }
    }
}
function display(head) {
    let temp = head;
    while(temp !== null){
        console.log(temp.value)
        temp = temp.next;
    };
}
function swap(head) {
    let temp = head.next;
    let last = head;
    while(last.next !== null){
        last = last.next;
    };
    let newList = {
        value: last.value,
        next: null
    }
    let newListPointer = newList;
    
    while(temp.next !== null){
        let newNode = {
            value: temp.value,
            next: null
        }
        newListPointer.next = newNode;
        newListPointer = newListPointer.next;
        temp = temp.next;
    }
    let lastNode = {
        value: head.value,
        next: null
    }
    newListPointer.next = lastNode;
    return newList;
}

let newList = swap(list);

display(newList);
console.log('----')
display(list)

console.log(list);