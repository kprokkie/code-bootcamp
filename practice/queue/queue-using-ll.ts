console.log('Queue using Linked List');

class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
}

Queue.prototype.enqueue = function (value) {
    // create node
    const node = new Node(value);

    if (!this.length) {
        this.first = this.last = node;
    } else {
        this.last.next =  node;
        this.last = node;
    }

    this.length++;

    return this;

}

Queue.prototype.dequeue = function () {
    if (!this.length) {
        return 'Queue is Empty !!';
    }

    if (this.first === this.last) {
        this.last = null;
    }

    let popNode = this.first;
    this.first = this.first.next;
    popNode.next = null;

    this.length--;

    return popNode;
}


Queue.prototype.peek = function () {
    if (!this.length) {
        return 'Queue is Empty !!';
    }

    return this.first.value;
}


Queue.prototype.isEmpty = function () {

}

Queue.prototype.print = function () {
    return this;
}


const q = new Queue();
console.log(q.peek());

q.enqueue('John');
q.enqueue('Rokkie');
q.enqueue('Pooja');

console.log(q.peek());
console.log(q.dequeue());
console.log(q.print());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.print());