console.log('Merge Sort');

function MergeSort(arr) {

    // console.log('Divide', arr);

    if (arr.length === 1) {
        return arr;
    }

    // split the array
    let length = arr.length;
    let leftArr = arr.slice(0, Math.floor(length / 2));
    let rightArr = arr.slice(Math.floor(length / 2));

    // console.log('Left Arr:', leftArr);
    // console.log('Right Arr:', rightArr);

    return merge(
        MergeSort(leftArr),
        MergeSort(rightArr)
    )
}

function merge(leftArr, rightArr) {

    // console.log('Conquer: ', leftArr, rightArr);

    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // compare left & right array
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // push remaining items in left arr to result arr
    while (leftIndex < leftArr.length) {
        resultArr.push(leftArr[leftIndex]);
        leftIndex++;
    }

    // push remaining items in right arr to result arr
    while (rightIndex < rightArr.length) {
        resultArr.push(rightArr[rightIndex]);
        rightIndex++;
    }


    // console.log('Result: ', resultArr);

    return resultArr;

}

console.log(MergeSort([6, 5, 3, 1, 8, 7, 2, 4, 9]));
