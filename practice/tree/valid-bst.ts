/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** https://leetcode.com/problems/validate-binary-search-tree/discuss/32117/My-JavaScript-solution
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST1 = function (root) {
    let inorderBST = makeInorderBST(root, []);
    console.log(root);
    console.log(inorderBST);
    for (let i = 0; i < inorderBST.length - 1; i++) {
        if (!(inorderBST[i] < inorderBST[i + 1])) {
            return false;
        }
    }
    return true;
};

function makeInorderBST(root, list) {
    debugger;
    if (!root) {
        return list;
    }

    let currentNode = root;
    // left
    if (currentNode.left) {
        makeInorderBST(currentNode.left, list);
    }
    // make inorder
    list.push(currentNode.val);

    // right
    if (currentNode.right) {
        makeInorderBST(currentNode.right, list);
    }

    return list;
}


var isValidBST = function (root) {
    return validateNode(root);
}

function validateNode(root) {
    if (!root) {
        return true;
    }
    let currentNode = root;
    return checkLeft(currentNode, currentNode.val) && checkRight(currentNode, currentNode.val);
}

function checkLeft(currentNode, max) {
    console.log('left', max);
    if (currentNode.left) {
        if (currentNode.val < currentNode.left.val) {
            return false;
        } else {
            return validateNode(currentNode.left);
        }
    } 
    return true;
}

function checkRight(currentNode, min) {
    //console.log('right', min);
    if (currentNode.right) {
        if (currentNode.val > currentNode.right.val) {
            return false;
        } else {
            return validateNode(currentNode.right);
        }
    }
    return true;
}

let root = {
    val: 10,
    right: {
        val: 15,
        right: { val: 20, right: null, left: null },
        left: { val: 6, right: null, left: null }
    },
    left: { val: 5, right: null, left: null }
};

// let root = {
//     val: 2,
//     right: { val: 5, right: null, left: null },
//     left: { val: 1, right: null, left: null }
// };

console.log(isValidBST(root));