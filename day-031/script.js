// Global scope
const name = "Prashik";

console.log("Outside:", name);


// Block scope
if (true) {
    const message = "Hello from inside the block.";

    console.log(message);
}


// Variable shadowing
const city = "Toronto";

if (true) {
    const city = "Brampton";

    console.log("Inside:", city);
}

console.log("Outside:", city);


// let also follows block scope
let age = 21;

if (true) {
    let age = 25;

    console.log("Inside age:", age);
}

console.log("Outside age:", age);
