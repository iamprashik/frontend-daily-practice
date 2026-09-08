const username = "   Prashik   ";

console.log("Original:", username);

// Remove whitespace from both sides
console.log("Trimmed:", username.trim());

// Remove whitespace from the beginning
console.log("Trim start:", username.trimStart());

// Remove whitespace from the end
console.log("Trim end:", username.trimEnd());

// Store the cleaned value
const cleanUsername = username.trim();

console.log(`Welcome, ${cleanUsername}!`);