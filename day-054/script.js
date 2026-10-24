// Day 054 - find() and findIndex()

const numbers = [12, 7, 25, 4, 18];

// 1. Find the first number greater than 10
const foundNumber = numbers.find(number => number > 10);

console.log("Found number:", foundNumber);

// 2. Find the index of the first number greater than 10
const foundIndex = numbers.findIndex(number => number > 10);

console.log("Found index:", foundIndex);

// 3. Search for a number that doesn't exist
const missingNumber = numbers.find(number => number > 100);
const missingIndex = numbers.findIndex(number => number > 100);

console.log("Missing number:", missingNumber);
console.log("Missing index:", missingIndex);

// 4. Find an artist by name
const favoriteArtists = ["Beirut", "Radiohead", "Coldplay"];

const artist = favoriteArtists.find(name => name === "Radiohead");

console.log("Found artist:", artist);
