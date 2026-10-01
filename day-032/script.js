// Truthy value
const name = "Prashik";

if (name) {
    console.log("Name exists.");
}


// Falsy value
const username = "";

if (username) {
    console.log("Username exists.");
} else {
    console.log("Username is empty.");
}


// Number 0 is falsy
const age = 0;

if (age) {
    console.log("Age has a value.");
} else {
    console.log("Age is zero.");
}


// Non-zero numbers are truthy
const score = 85;

if (score) {
    console.log("Score has a value.");
}


// Boolean values
const isLoggedIn = false;

if (isLoggedIn) {
    console.log("User is logged in.");
} else {
    console.log("User is not logged in.");
}
