// Function with one parameter
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Prashik");
greet("Alex");

console.log("----------------");

// Function with two parameters
function addNumbers(a, b) {
    console.log("Sum:", a + b);
}

addNumbers(10, 5);
addNumbers(20, 30);

console.log("----------------");

// Function with a default value
function greetUser(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}

greetUser("Prashik");
greetUser();