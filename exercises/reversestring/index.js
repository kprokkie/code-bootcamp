
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('');
}

function reverseV2(str) {
    let rev = '';
    for (let char of str) {
        rev = char + rev;
    }
    return rev;
}

function reverseV3(str) {
    return [...str].reverse().join();
}

module.exports = reverse;
