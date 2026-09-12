// Numbers stored as strings
const age = "23";
const price = "19.99";

// Convert string to a whole number
const convertedAge = parseInt(age);

console.log("Original age:", age);
console.log("Converted age:", convertedAge);
console.log("Age type:", typeof convertedAge);
console.log("Age type:", typeof age);

// Convert string to a decimal number
const convertedPrice = parseFloat(price);

console.log("Original price:", price);
console.log("Converted price:", convertedPrice);
console.log("Price type:", typeof convertedPrice);

// parseInt() removes the decimal portion
const number = "42.75";

console.log("parseInt:", parseInt(number));

// parseFloat() keeps the decimal portion
console.log("parseFloat:", parseFloat(number));

// Useful example with user-style input
const quantity = "5";
const itemPrice = "12.50";

const total = parseInt(quantity) * parseFloat(itemPrice);

console.log("Total:", total);