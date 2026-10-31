
 // Day 060 - Spread Operator with Objects

const user = {
    name: "Prashik",
    age: 21,
    country: "Canada"
};

// Create a copy
const copiedUser = { ...user };

console.log("Original:", user);
console.log("Copied:", copiedUser);
