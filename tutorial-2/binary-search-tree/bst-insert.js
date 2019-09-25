// BST

class BST {
    constructor() {
        this.root = null;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Insert - Iterative
BST.prototype.insertIterative = (value) => {

    let node = new Node(value);

    if (!this.root) {
        this.root = node;
        return this;
    }

    let curr = this.root;
    while (curr) {
        if (value > curr.value) {
            if (curr.right) curr = curr.right;
            else { curr.right = node; return this; }
        } else {
            if (curr.left) curr = curr.left;
            else { curr.left = node; return this; }
        }
    }
}


// Insert - Recursive
BST.prototype.insertRecursive = (value) => {

    let node = new Node(value);

    if (!this.root) {
        this.root = node;
        return this;
    }

    function helper(curr) {
        if (value > curr.value) {
            if (curr.right) helper(curr.right);
            else { curr.right = node; return this; }
        } else {
            if (curr.left) helper(curr.left);
            else { curr.left = node; return this; }
        }
    }

    helper(this.root);
}

// Traversal
// BFS - Recursive - using Queue
BST.prototype.traversalBFSRecursive = (root) => {

    if (!root)
        return [];

    let bfsTraversal = [];
    let queue = [];
    // push root 
    queue.push(root);
    while (queue.length) {
        let curr = queue.shift();

        bfsTraversal.push(curr.value);

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }

    console.log(bfsTraversal);

}

// log
BST.prototype.log = () => {
    console.log(JSON.stringify(this.root));
}

// const bst = new BST();
// bst.insertIterative(10);
// bst.insertIterative(6);
// bst.insertIterative(15);
// bst.insertIterative(20);
// bst.insertIterative(3);
// bst.insertIterative(8);
// bst.insertIterative(13);
// bst.log();

const bst1 = new BST();
bst1.insertRecursive(10);
bst1.insertRecursive(6);
bst1.insertRecursive(15);
bst1.insertRecursive(20);
bst1.insertRecursive(3);
bst1.insertRecursive(8);
bst1.insertRecursive(13);
// bst1.log();
// console.log(JSON.stringify(this.root));

// Traversal
// BFS - Recursive
bst1.traversalBFSRecursive(this.root);
