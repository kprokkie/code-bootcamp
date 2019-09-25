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

// Traversal
// BFS - Iterative - using Queue
BST.prototype.traversalBFSIterative = (root) => {

    if (!root)
        return [];

    let traversal = [];
    let queue = [];
    // push root 
    queue.push(root);

    while (queue.length) {
        let curr = queue.shift();

        traversal.push(curr.value);

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }

    console.log(traversal);
}

// BFS - Recursive - using Queue
BST.prototype.traversalBFSRecursive = (root) => {
    if (!root)
        return [];

    let traversal = [];
    let queue = [];
    // push root
    queue.push(root);

    function helper(queue) {
        if (!queue.length)
            return;

        let curr = queue.shift();

        traversal.push(curr.value);

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);

        helper(queue)
    }

    helper(queue);

    console.log(traversal);
}

// DFS - Recursive 
BST.prototype.traversalDFSRecursive = (root) => {
    if (!root)
        return [];
    
    let traversal = [];
    function helper (curr) {
        if (!curr)
            return;
        
        // Pre-Order // push here
        traversal.push(curr.value); 
        if (curr.left) helper(curr.left);
        // In-Order // push here
        if (curr.right) helper(curr.right);
        // Post-Order // push here
    }

    helper(root);

    console.log(traversal);
}

const root = {
    "value": 10,
    "left": {
        "value": 6,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 8,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 15,
        "left": {
            "value": 13,
            "left": null,
            "right": null
        },
        "right": {
            "value": 20,
            "left": null,
            "right": null
        }
    }
};

const bst1 = new BST();

// Traversal
// BFS - Iterative
console.log('BFS - Iterative');
bst1.traversalBFSIterative(root);

// BFS - Recursive
console.log('BFS - Recursive');
bst1.traversalBFSRecursive(root);

// DFS - Recursive
console.log('DFS - Recursive');
bst1.traversalDFSRecursive(root);
