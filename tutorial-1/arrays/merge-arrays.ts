console.log('Merge Sorted Arrays');

function mergeSortedArrays(lArr, rArr) {
    let arr = [];
    let l = 0;
    let r = 0;

    // comapare & fill till one of array exhausted
    while (l < lArr.length && r < rArr.length) {
        if (lArr[l] < rArr[r]) {
            arr.push(lArr[l]);
            l++;
        } else {
            arr.push(rArr[r]);
            r++;
        }
    }

    // fill remaining of left array if any
    while (l < lArr.length) {
        arr.push(lArr[l]);
        l++;
    }

    // fill remaining of right array if any
    while (l < lArr.length) {
        arr.push(rArr[r]);
        r++;
    }

    return arr;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));