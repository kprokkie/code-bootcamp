console.log('Recurring Character');

// TC: O(n^2)
// SC: O(1)
// PASSED for 1 example but FAILED for second example
function recurringCharacter(arr) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (value === arr[j]) {
                return value;
            }
        }
    }
}

// Using Arrays
// TC: O(n)
// SC: O(n)
// PASSED for both example
function recurringCharacterV2(arr) {
    let result = []; // array
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        } else {
            return arr[i];
        }
    }
}

// Using Object
// TC: O(n)
// SC: O(n)
// PASSED for both example
function recurringCharacterV3(arr) {
    let result = {}; // object
    for (let i = 0; i < arr.length; i++) {
        if (!result[arr[i]]) {
            result[arr[i]] = arr[i];
        } else {
            return arr[i];
        }
    }
}

console.log('V1 Using 2 For Loops');
console.log(recurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));

console.log('V2 Using Array');
console.log(recurringCharacterV2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringCharacterV2([2, 1, 1, 2, 3, 5, 1, 2, 4]));

console.log('V3 Using Objects');
console.log(recurringCharacterV3([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringCharacterV3([2, 1, 1, 2, 3, 5, 1, 2, 4]));