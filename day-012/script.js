const language = "JavaScript";

console.log("Original:", language);

// Extract characters from index 0 to 3
console.log("slice(0, 4):", language.slice(0, 4));

// Extract from index 4 to the end
console.log("slice(4):", language.slice(4));

// substring works similarly
console.log("substring(0, 4):", language.substring(0, 4));
console.log("substring(4, 10):", language.substring(4, 10));

// slice can use negative indexes
console.log("slice(-7):", language.slice(-7));

// Another example
const fullName = "Prashik Koirala";

const firstName = fullName.slice(0, 7);
const lastName = fullName.slice(8);

console.log("Full name:", fullName);
console.log("First name:", firstName);
console.log("Last name:", lastName);
