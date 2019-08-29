console.log('Binary Search Tree');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
}

BST.prototype.insert = (value) => {
    // create node
    const node = new Node(value);

    if (!this.root) {
        this.root = node;
        return this;
    }

    let currentNode = this.root;

    // traverse till found location
    while (currentNode) {
        if (value > currentNode.value) { // go right
            if (!currentNode.right) {
                currentNode.right = node;
                currentNode = null;
            } else {
                currentNode = currentNode.right;
            }
        } else { // go left
            if (!currentNode.left) {
                currentNode.left = node;
                currentNode = null;
            } else {
                currentNode = currentNode.left;
            }
        }
    }
    return this;
}

BST.prototype.lookup = (value) => {
    let currentNode = this.root;

    while (currentNode) {
        if (value > currentNode.value) {
            currentNode = currentNode.right;
        } else if (value < currentNode.value) {
            currentNode = currentNode.left;
        } else if (value === currentNode.value) {
            return currentNode;
        }
        return `${value} is not found !!`
    }
}

BST.prototype.remove = (value) => {
    let currentNode = this.root;
    let tempNode = null;

    while (currentNode) {
        if (value > currentNode.value) {
            tempNode = currentNode;
            currentNode = currentNode.right;
        } else if (value < currentNode.value) {
            tempNode = currentNode;
            currentNode = currentNode.left;
        } else if (value === currentNode.value) {
            console.log('Parent: ', tempNode);
            console.log('Match: ', currentNode);
            return this;
        }
        // return `${value} is not found !!`
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(15);
bst.insert(13);
bst.insert(17);
bst.insert(25);
bst.insert(22);
// bst.insert(27);
console.log(JSON.stringify(bst.insert(27)));
bst.remove(27);

