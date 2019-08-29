console.log('Stack');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0
    }
}

Stack.prototype.peek = function () {
    return this.top;
}

Stack.prototype.push = function (value) {
    // make node 
    const node = new Node(value);

    if (!this.length) {
        this.top = this.bottom = node;
    } else {
        this.top.next = node;
        this.top = node;
    }

    this.length++;
    return this;
}

Stack.prototype.pop = function () {

    if (!this.length) {
        return 'Stack is Empty !!';
    }

    let currentNode = this.bottom;

    if (this.length === 1) {
        this.top = this.bottom = null;
        this.length--;
        return currentNode;
    }

    let counter = 1;

    while (counter < this.length - 1) {
        currentNode = currentNode.next;
        counter++;
    }

    this.top = currentNode;
    let deletedNode = currentNode.next;
    currentNode.next = null;

    this.length--;
    return deletedNode;
}

Stack.prototype.print = function () {

    let currentNode = this.bottom;
    while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.push(30));
stack.print();
console.log('Peek: ', stack.peek());
console.log(stack.pop());
console.log('Peek: ', stack.peek());
console.log(stack.pop());
console.log('Peek: ', stack.peek());
console.log(stack.pop());
console.log('Peek: ', stack.peek());
stack.print();
console.log('Peek: ', stack.peek());
console.log(stack.pop());
