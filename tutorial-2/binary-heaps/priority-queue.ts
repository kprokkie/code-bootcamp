class Node {
    constructor (val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.data = [];
    }
    enqueue(val, priority) {
        const node = new Node(val, priority);
        this.data.push(node);
        return this.bubbleUp();
    }
    dequeue() {
        let min = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.splice(this.data.length - 1);
        this.sinkDown();
        return min;
    }
    bubbleUp() {
        let index = this.data.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.data[parentIndex].priority < this.data[index].priority) break;
            let temp = this.data[index];
            this.data[index] = this.data[parentIndex];
            this.data[parentIndex] = temp;
            index = parentIndex;
        }
        return this.data;
    }
    sinkDown() {
        let parentIndex = 0;
        while (parentIndex < this.data.length - 1) {
            let leftChildIndex = 2 * parentIndex + 1;
            let rightChildIndex = 2 * parentIndex + 2;

            let lHold = false;
            let rHold = false;

            // check
            console.log(this.data);
            lHold = (this.data[leftChildIndex].priority < this.data[parentIndex].priority);
            if (lHold) lHold = this.data[leftChildIndex].priority < this.data[rightChildIndex].priority;
            if (!lHold) rHold = this.data[rightChildIndex].priority < this.data[parentIndex].priority;

            if (!lHold && !rHold) break;

            // swap
            let index = lHold ? leftChildIndex : rightChildIndex;
            let temp = this.data[index];
            this.data[index] = this.data[parentIndex];
            this.data[parentIndex] = temp;
            parentIndex = index;
        }
        console.log(this.data);
    }
}

const pq = new PriorityQueue();
console.log(pq.enqueue('A', 20));
console.log(pq.enqueue('B', 10));
console.log(pq.enqueue('C', 15));
console.log(pq.enqueue('D', 5));
console.log(pq.enqueue('E', 1));
console.log(pq.enqueue('E', 11));
console.log(pq.enqueue('E', 17));
console.log('--------------------------------');
console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
