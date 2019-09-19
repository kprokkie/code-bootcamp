console.log('Double Linked List');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

DoubleLinkedList.prototype.append = function (value) {
    // make node
    const node = new Node(value);

    if (!this.size) {
        this.head = this.tail = node;
    } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    this.size++;
    return this;
}

DoubleLinkedList.prototype.prepend = function (value) {
    // make node
    const node = new Node(value);

    if (!this.size) {
        this.head = this.tail = node;
    } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    this.size++;
    return this;
}

DoubleLinkedList.prototype.insert = function (index, value) {

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
    node.prev = currentNode.next.prev;
    currentNode.next.prev = node;
    currentNode.next = node;

    this.size++;

    return this;

}

DoubleLinkedList.prototype.remove = function (index) {

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
    deletedNode.next.prev = deletedNode.prev;
    currentNode.next = deletedNode.next;

    this.size++;

    return this;
}

DoubleLinkedList.prototype.list = function (reverse = false) {

    let result = [];

    let currentNode = reverse ? this.tail : this.head;

    while (currentNode) {
        result.push(currentNode.value);
        currentNode = reverse ? currentNode.prev : currentNode.next;
    }

    return result;
}

DoubleLinkedList.prototype.print = function (reverse = false) {

    let result = '';
    let currentNode = reverse ? this.tail : this.head;

    while (currentNode) {
        result += ` ${currentNode.value} *-->`;
        currentNode = reverse ? currentNode.prev : currentNode.next;
    }

    result += ` NULL`;

    return result;
}

// make double linked list
const dLL = new DoubleLinkedList();
dLL.append(10);
dLL.append(20);
dLL.append(30);
dLL.prepend(50);
dLL.prepend(60);
dLL.insert(2, 40);
dLL.remove(3);
console.log(dLL.list());
console.log(dLL.print());
console.log(dLL.list(true));
console.log(dLL.print(true));
