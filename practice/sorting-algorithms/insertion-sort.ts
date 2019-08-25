console.log('Insertion Sort');

function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let loc = i;
        for (let j = i - 1; j >= 0; j--) {
            // move right
            if (temp < arr[j]) {
                loc = j;
                arr[j + 1] = arr[j];
            }
        }
        // insert to loc
        arr[loc] = temp;
    }
    return arr;
}

console.log(InsertionSort([6, 5, 3, 1, 8, 7, 2, 4]));
