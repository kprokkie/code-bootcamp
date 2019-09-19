function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

console.log('Recursive'); // O(n)
console.log(factorialRecursive(5));
console.log(factorialRecursive(1));
console.log(factorialRecursive(0));

function factorialIterative(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log('Iterative');  // O(n)
console.log(factorialIterative(5));
console.log(factorialIterative(1));
console.log(factorialIterative(0));