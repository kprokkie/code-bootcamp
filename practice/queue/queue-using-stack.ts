console.log('Queue using Stacks');

// it ll be easy if stack is made from arrays

function QueueStack () {
    // constructor() {
        this.first = [];
        this.last = [];
    // }
}

QueueStack.prototype.enqueue = function (value) {
    const length = this.first.length
    for (let i = 0; i < length; i++) {
        this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
}

QueueStack.prototype.dequeue = function () {
    const length = this.last.length
    for (let i = 0; i < length; i++) {
        this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
}

QueueStack.prototype.peek = function () {
    return this.last.length ? this.last[0] : this.first[this.first.length - 1];
}

QueueStack.prototype.empty = function () {
    return !this.last.length && !this.first.length;
}

const qs = new QueueStack();
console.log(qs.empty());
qs.peek();
console.log(qs.enqueue('Joy'));
console.log(qs.enqueue('Matt'));
console.log(qs.enqueue('Pavel'));
console.log(qs.empty());
qs.peek();
console.log(qs.dequeue());
// qs.dequeue();
// qs.dequeue();
console.log(qs.peek());