console.log('Reverse a String');

function reverse(str) {
    return str.split('').reverse().join('');
}

function reverseV2(str) {
    return [...str].reverse().join('');
}

console.log(reverse('Pooja'));
console.log(reverseV2('Rokkie'));
