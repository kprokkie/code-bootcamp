// Binary Search

// Iterative 

function binarySearchIterative(arr, val) {

    if (!arr && !arr.length)
        return -1;

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] < val) {
            start = middle + 1;
        } else if (arr[middle] > val) {
            end = middle - 1;
        } else if (arr[middle] === val) {
            return middle;
        }
    }
    return -1;
}

const arr = [1, 4, 5, 7, 8, 9, 10];
console.log(binarySearchIterative(arr, 6));

// Recursive 

function binarySearchRecursive(arr, val) {

    if (!arr && !arr.length)
        return -1;


    let start = 0;
    let end = arr.length - 1;

    function helper (start, end) {
        if (start <= end) // base condition
            return -1;

        let middle = Math.floor((start + end) / 2);
        if (arr[middle] < val) {
            start = middle + 1;
            return helper(start, end);
        } else if (arr[middle] > val) {
            end = middle - 1;
            return helper(start, end);
        } else if (arr[middle] === val) {
            return middle;
        }
    }
    
    return helper(start, end);
}

console.log(binarySearchRecursive(arr, 6));


/** 
 * i 0  1  2  3  4  5  6
 * [ 1, 4, 5, 7, 8, 9, 10 ];
 * binarySearchRecursive(arr, 9)
 * 
 * r helper(0,6) // 1st call
 *      middle = 3
 *          start = 4   
 *          r helper(4,6) // 2nd call
 *              middle = 5    
 *              match return 5
 */