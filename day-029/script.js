// Function that returns a value
function add(a, b) {
    return a + b;
}

const result = add(10, 5);

console.log("Result:", result);


// Return a multiplication result
function multiply(a, b) {
    return a * b;
}

const product = multiply(4, 5);

console.log("Product:", product);


// Use a returned value in another calculation
function square(number) {
    return number * number;
}

const number = square(6);

console.log("Square:", number);


// Return a message
function greet(name) {
    return `Hello, ${name}!`;
}

const message = greet("Prashik");

console.log(message);