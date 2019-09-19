console.log('Common Item');

// TC: O(n^2)
// SC: O(1)
// PASSED for 1 example but FAILED for second example
function containCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return arr1[i];
            }
        }
    }
    return undefined;
}

// Using Arrays Includes
// TC: O(n)
// SC: O(n)
// PASSED for both example
function containCommonItemV2(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            return arr1[i];
        }
    }
    return undefined;
}

// Using Object
// TC: O(n)
// SC: O(n)
// PASSED for both example
function containCommonItemV3(arr1, arr2) {
    let result = {}; // object

    // create object with properties of arr1
    for (let i = 0; i < arr1.length; i++) {
        if (!result[arr1[i]]) {
            result[arr1[i]] = arr1[i];
        }
    }

    // check arr2 values as keys of object
    for (let j = 0; j < arr2.length; j++) {
        if (result[arr2[j]]) {
            return arr2[j];
        }
    }

    return undefined;
}

let arr1 = ['a', 'b', 'c', 'x'];
let arr2 = ['z', 'y', 'i'];
let arr3 = ['z', 'y', 'x'];

console.log('V1 Using 2 For Loops');
console.log(containCommonItem(arr1, arr2));
console.log(containCommonItem(arr1, arr3));

console.log('V2 Using Array');
console.log(containCommonItemV2(arr1, arr2));
console.log(containCommonItemV2(arr1, arr3));

console.log('V3 Using Objects');
console.log(containCommonItemV3(arr1, arr2));
console.log(containCommonItemV3(arr1, arr3));