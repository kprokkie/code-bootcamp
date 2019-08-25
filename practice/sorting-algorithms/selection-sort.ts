console.log('Selection Sort');

function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // smallest element head
        let selectHead = arr[i];
        // smallest element location
        let loc = i;

        for (let j = i + 1; j < arr.length; j++) {
            // select smallest element & location
            if (selectHead > arr[j]) {
                selectHead = arr[j];
                loc = j;
            }
        }
        // swap
        let temp = arr[i];
        arr[i] = selectHead;
        arr[loc] = temp;
    }
    return arr;
}

console.log(SelectionSort([8, 5, 2, 6, 9, 3, 1, 4, 0, 7]));

console.log('Selection Sort V2');

function SelectionSortV2(arr) {
    for (let i = 0; i < arr.length; i++) {
        // smallest element head
        let selectHead = arr[i];
        // smallest element location
        let loc = i;

        for (let j = i + 1; j < arr.length; j++) {
            // select smallest element & location
            if (arr[loc] > arr[j]) {
                // selectHead = arr[j];
                loc = j;
            }
        }
        // swap
        // let temp  = arr[i];
        arr[i] = arr[loc];
        arr[loc] = selectHead;
    }
    return arr;
}

console.log(SelectionSortV2([8, 5, 2, 6, 9, 3, 1, 4, 0, 7]));
