console.log('Linked List');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

SingleLinkedList.prototype.append = function (value) {
    // make node
    const node = new Node(value);

    if (!this.size) {
        this.head = this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }

    this.size++;
    return this;
}

SingleLinkedList.prototype.prepend = function (value) {
    // make node
    const node = new Node(value);

    if (!this.size) {
        this.head = this.tail = node;
    } else {
        node.next = this.head;
        this.head = node;
    }

    this.size++;
    return this;
}

SingleLinkedList.prototype.insert = function (index, value) {

    if (!this.size || index >= this.size) {
        this.append(value);
    }

    // make node
    const node = new Node(value);

    let currentNode = this.head;
    let counter = 1;

    while (counter < index) {
        currentNode = currentNode.next;
        counter++;
    }

    node.next = currentNode.next;
    currentNode.next = node;

    this.size++;

    return this;

}

SingleLinkedList.prototype.remove = function (index) {

    if (!this.size || this.size < index) {
        return this;
    }

    let currentNode = this.head;
    let counter = 1;

    while (counter < index) {
        currentNode = currentNode.next;
        counter++;
    }

    let deletedNode = currentNode.next;
    currentNode.next = deletedNode.next;

    this.size++;

    return this;
}

SingleLinkedList.prototype.list = function () {

    let result = [];
    let currentNode = this.head;

    while (currentNode) {
        result.push(currentNode.value);
        currentNode = currentNode.next;
    }

    return result;
}

SingleLinkedList.prototype.print = function () {

    let result = '';
    let currentNode = this.head;

    while (currentNode) {
        result += ` ${currentNode.value} *-->`;
        currentNode = currentNode.next;
    }

    result += ` NULL`;

    return result;
}

SingleLinkedList.prototype.reverse = function () {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }

    this.head.next = null;
    this.head = first;

}

// make single linked list
const sLL = new SingleLinkedList();
sLL.append(10);
sLL.append(20);
sLL.append(30);
sLL.prepend(50);
sLL.prepend(60);
sLL.insert(2, 40);
sLL.remove(3);
console.log(sLL.list());
console.log(sLL.print());
sLL.reverse();
console.log(sLL.list());
console.log(sLL.print());

