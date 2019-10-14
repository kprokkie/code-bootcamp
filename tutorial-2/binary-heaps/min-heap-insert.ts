class MinBinaryHeap {
    constructor() {
        // this.data = [41, 39, 33, 18, 27, 12];
        this.data = [];
    }
    insert(val) {
        this.data.push(val);
        return this.bubbleUp();
    }
    bubbleUp() {
        let index = this.data.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.data[parentIndex] < this.data[index]) break;
            let temp = this.data[index];
            this.data[index] = this.data[parentIndex];
            this.data[parentIndex] = temp;
            index = parentIndex;
        }
        return this.data;
    }
}

const minBH = new MinBinaryHeap();
console.log(minBH.insert(55));
console.log(minBH.insert(24));
console.log(minBH.insert(34));
console.log(minBH.insert(44));
console.log(minBH.insert(10));
