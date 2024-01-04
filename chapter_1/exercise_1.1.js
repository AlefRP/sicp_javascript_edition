// SICP JSE - The Elements of Programming
// Exercise 1.1.1

// Expression
console.log(468);

// Compound Expression
console.log(1000 - 387);

// Combined Expression - Combination

// * and / has higher precedence than + and -, and each pair are evaluated left to right
console.log((468 * 1000) - 387);
console.log(3 * 5 + 10 / 2);

// Both are the same
// * and / has higher precedence than + and -, and each pair are evaluated left to right
console.log(1 - 5 / 2 * 3 + 2);
console.log((1 - (5 / 2) * 3 ) + 2);

// Exercise 1.1.2

// Naming the Enviroment

// Associate an identifier with a value - it has a constant value
const size = 3;
console.log(size);
console.log(size * 5);

// Creting formulas with const
const pi = 3.14;
const radius = 5;

console.log(pi * radius * radius);

const circunference = 2 * pi * radius;
console.log(circunference);

// Exercise 1.1.4

// Compound Functions
function square(x) {
    return x * x;
}

console.log(square(5));

// Will first evaluate the expression 2 + 5 and then square it
console.log(square(2 + 5));

// I can use the same function name multiple times
console.log(square(square(5)));

// I can use a function as a building block for another function
function sum_of_squares(x, y) {
    return square(x) + square(y);
}

console.log(sum_of_squares(3, 4));

function f(n) {
    return sum_of_squares(n, n + 1);
}

console.log(f(3));

// Using conditional expressions
function abs(x) {
    return x >= 0 ? x : -x;
}

function abs_m(x) {
    return x > 0
        ? x
        : x === 0
        ? 0
        : -x;
}