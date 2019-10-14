class MinBinaryHeap {
    constructor() {
        this.data = [12, 27, 18, 33, 39, 41, 67];
        // this.data = [];
    }
    extractMin() {
        let min = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.splice(this.data.length - 1);
        this.sinkDown();
        return min;
    }
    sinkDown() {
        let parentIndex = 0;
        while (parentIndex < this.data.length - 1) {
            let leftChildIndex = 2 * parentIndex + 1;
            let rightChildIndex = 2 * parentIndex + 2;

            let lHold = false;
            let rHold = false;

            // check
            lHold = (this.data[leftChildIndex] < this.data[parentIndex]);
            if (lHold) lHold = this.data[leftChildIndex] < this.data[rightChildIndex];
            if (!lHold) rHold = this.data[rightChildIndex] < this.data[parentIndex];

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

const minBH = new MinBinaryHeap();
console.log(minBH.extractMin());
// console.log(minBH.extractMin());


