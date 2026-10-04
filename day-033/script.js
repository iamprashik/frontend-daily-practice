// undefined
let username;

console.log("Username:", username);
console.log("Username type:", typeof username);


// null
let selectedUser = null;

console.log("Selected user:", selectedUser);
console.log("Selected user type:", typeof selectedUser);


// Check for undefined
let age;

if (age === undefined) {
    console.log("Age has not been assigned yet.");
}


// Check for null
let profile = null;

if (profile === null) {
    console.log("Profile is intentionally empty.");
}


// Assign a value later
let city;

console.log("City before:", city);

city = "Toronto";

console.log("City after:", city);
