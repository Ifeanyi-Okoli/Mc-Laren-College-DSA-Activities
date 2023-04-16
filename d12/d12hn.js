class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DLL {
    constructor(){
        this.head = null; 
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node;
            this.tail = node
        }else{
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let temp = this.tail;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
    }
    unshift(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            let temp = this.head;
            this.head = node;
            node.next = temp;
            temp.prev = node;
        }
        this.length++;
        return this;
    }
    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        if(this.length ===1){
            this.head = null; 
            this.tail = null;
        }else{
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return this;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        let node = new Node(val);
        if(index === 0) return !!this.unshift(node);
        if (index === this.length) return !!this.push(node);
        let current = this.head;
        let counter = 0;
        while (counter !== index){
            current = current.next;
            counter++;
        }
        let temp = current;
        let prev = temp.prev;
        prev.next = node;
        node.next = temp;
        node.prev = prev;
        this.length++;
        return true;
    }
}
let list = new DLL;

list .push(1);
list .push(2);
list .push(3);
list.push(4);
list.push(6);
list.pop();
list.pop();
list.unshift(20);
list.shift();
list.insert(2, "welcome");
console.log(list);