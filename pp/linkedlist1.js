class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._length = 0
    }

    add(value) {
        //create new node
        let node = new Node(value);
        if (!this._head && !this._tail) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            this._tail = this._tail.next;
            this._length++;
            return;
        }
        if(this._tail === current){
            this._tail = previous;
        }
        previous.next = current.next;
        this._length--;
        return;
    }

    remove(value) {
        if (this.contains(value)) {
            let current = this._head;
            let previous = this._head;
            while (current) {
                if (current.value === value) {
                    if (this._head === current) {
                        this._head = this._head.next;
                    }
                }
            }
        }
    }

    contains(value) {
        let node = this._head;
        while (node) {
            if (node.value === value) return true;
            node = node.next;
        }
        return false;
    }




    size() {
        return this._length;
    }
}

let AmazingRace = new LinkedList();
AmazingRace.add("COlombo, Sri Lanka");
AmazingRace.add("Lagos, Nigeria");
AmazingRace.add("Surat, India");
AmazingRace.add("Suzhou, China");

console.log(AmazingRace);

AmazingRace.contains("Suzhou, China");
//true
AmazingRace.contains("Hanoi, Vietnam");
//false
AmazingRace.add("Hanoi, Vietnam");

AmazingRace.contains("Seattle, Washington");
//false

AmazingRace.add("Seattle, Washington");

AmazingRace.contains("North Pole");
//false

AmazingRace.add("North Pole");
AmazingRace.remove('North Pole');


function remove(value) {    if(this.contains(value)){                let current = this._head;              let previous = this._head;        while(current){                   if(current.value === value){            if(this._head === current){               this._head = this._head.next;              this._length--;                            return;                                  }            if(this._tail === current){               this._tail = previous;                }            previous.next = current.next;            this._length--;                        return;                              }          previous = current;                    current = current.next;              }     }    }


addHead(value) {
}

insertAfter(target, value){
    
}