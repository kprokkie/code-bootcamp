// Frequency Counter Pattern

// check squre & frequency

// [1,2,3] [4,9,1] true
// [1,2,2] [1,4,9] false

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let hash1 = {};
    let hash2 = {};
    for (let i = 0; i < arr1.length; i++) {
        hash1[arr1[i]] = ++hash1[arr1[i]] || 1;
        hash2[arr2[i]] = ++hash2[arr2[i]] || 1;
    }

    for (let key in hash1) {
        if (!(key ** 2 in hash2)) {
            return false;
        }
        if (hash1[key] !== hash2[key ** 2]) {
            return false;
        }
    }

    return true;
}

const arr1 = [1, 2, 3, 2];
const arr2 = [4, 9, 1, 4];
console.log(same(arr1, arr2));