function ListNode(val) {
    this.val = val;
    this.next = null;
}

@param {ListNode} l1
@param {ListNode} l2
@return {ListNode}

var addTwoNumbers = function(l1, l2) {
    let num1 = [];
    let num2 = [];
    let current1 = l1;
    let current2 = l2;
    while(current1){
        num1.unshift(current1.val);
        current1 = current1.next;
        console.log(num1);
    }
    while(current2){
        num2.unshift(current2.val);
        current2 = current2.next;
        console.log(num2);
    }
    let number1 = parseInt(num1.join(''));
    console.log(number1);
    let number2 = parseInt(num2.join(''));
    console.log(number2);
    console.log("Number 1 is " + number1);
    console.log("Number 2 is " + number2);
    let result = number1 + number2;
    console.log(result);
    let liststr = result.toString();
    console.log(liststr);
    let node = new ListNode();
    let current = node;
    for (let i = liststr.length - 1; i >= 0; i--){
        if(current.val !== undefined){
            node.next = new ListNode(liststr[i]);
            current = current.next;
        }
        else {
            node.value = liststr[i];
            current = current.next;
        }
    }
    return node;
};