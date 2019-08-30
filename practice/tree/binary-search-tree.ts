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

// complex 
// try later
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

BST.prototype.traversalBFS = () => {
    let currentNode = this.root;
    let result = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length) {
        currentNode = queue.shift();
        result.push(currentNode.value);

        // left
        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        // right
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    return result;
}

BST.prototype.recursiveTraversalBFS = (queue, list) => {
    return recursiveBST(queue, list);
}

function recursiveBST(queue, list) {
    if (!queue.length) {
        return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);

    // left
    if (currentNode.left) {
        queue.push(currentNode.left);
    }

    // right
    if (currentNode.right) {
        queue.push(currentNode.right);
    }

    return recursiveBST(queue, list);
}

BST.prototype.recursiveInorderDFS = () => {
    return traverseInorderDFS(this.root, []);
}

function traverseInorderDFS(node, list) {

    // PRE-ORDER push here
    // list.push(node.value);

    // left
    if (node.left) {
        traverseInorderDFS(node.left, list);
    }

    // IN-ORDER push here
    list.push(node.value);

    // right
    if(node.right) {
        traverseInorderDFS(node.right, list);
    }

    // POST-ORDER push here
    // list.push(node.value);

    return list;
}

BST.prototype.isValidBST = (root) => {

    let sortedBST = inorderBST(root, []);
    console.log(sortedBST);
    for (let i = 0; i < sortedBST.length - 1; i++) {
        if (!(sortedBST[i] < sortedBST[i+1])) {
            return false;
        }
    }
    return true;

    function inorderBST (root, list) {
        if (!root) {
            return list;
        }

        let currentNode = root;

        //
        if (currentNode.left) {
            inorderBST(currentNode.left, list);
        }
        // in order
        list.push(currentNode.value);

        if (currentNode.right) {
            inorderBST(currentNode.right, list);
        }

        return list;
    }
}

const bst = new BST();
// bst.insert(9);
// bst.insert(4);
// bst.insert(6);
// bst.insert(20);
// bst.insert(170);
// bst.insert(15);
// bst.insert(1);
// bst.insert(18);

//------------------
bst.insert(2);
bst.insert(1);
bst.insert(3);


// bst.remove(27);
console.log(bst.traversalBFS());
console.log(bst.recursiveTraversalBFS([this.root], []));
// BFS: [ 9, 4, 20, 1, 6, 15, 170 ]

console.log(bst.recursiveInorderDFS());
// 
console.log('Check Valid BST');
console.log(bst.isValidBST(this.root));