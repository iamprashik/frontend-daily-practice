// Basic arrow function
const greet = () => {
    console.log("Hello!");
};

greet();


// Arrow function with one parameter
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
};

greetUser("Prashik");


// Arrow function with two parameters
const add = (a, b) => {
    return a + b;
};

const result = add(10, 5);

console.log("Sum:", result);


// Short arrow function
const multiply = (a, b) => a * b;

console.log("Product:", multiply(4, 5));


// Another short arrow function
const square = (number) => number * number;

console.log("Square:", square(6));