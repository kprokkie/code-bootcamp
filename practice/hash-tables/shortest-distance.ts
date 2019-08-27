console.log('Shortest Distance between Recurring Character');

function shortestDistance(arr) {
    let result = {}; // object
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i]]) {
            let gap = i - result[arr[i]].location;
            if (result[arr[i]].gap) {
                if (gap < result[arr[i]].gap) {
                    result[arr[i]].gap = gap;
                }
            } else {
                result[arr[i]].gap = gap;
            }
            result[arr[i]].location = i;
        } else {
            result[arr[i]] = { location: i, gap: null }
        }
    }

    return result;    
}

console.log(shortestDistance([2, 5, 1, 2, 3, 7, 5, 1, 2, 5, 4]));
console.log(shortestDistance([2, 1, 1, 2, 3, 7, 5, 1, 2, 4]));