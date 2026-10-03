// User object
const user = {
    name: "Prashik",
    age: 21
};

console.log("Name:", user.name);
console.log("Age:", user.age);


// Property that does not exist
console.log("City:", user.city);


// Optional chaining
console.log("City safely:", user.address?.city);


// Nested object
const profile = {
    name: "Prashik",
    contact: {
        email: "prashik@example.com"
    }
};

console.log("Email:", profile.contact?.email);
console.log("Phone:", profile.contact?.phone);


// Completely missing object
const account = null;

console.log("Account name:", account?.name);
