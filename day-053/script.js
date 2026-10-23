// Day 053 - Sorting Arrays

// 1. Sort strings alphabetically
const artists = ["Radiohead", "Beirut", "Coldplay", "The Strokes"];

const sortedArtists = [...artists].sort();

console.log("Original artists:", artists);
console.log("Sorted artists:", sortedArtists);

// 2. Sort numbers in ascending order
const numbers = [40, 5, 100, 25, 9];

const ascendingNumbers = [...numbers].sort((a, b) => a - b);

console.log("Ascending:", ascendingNumbers);

// 3. Sort numbers in descending order
const descendingNumbers = [...numbers].sort((a, b) => b - a);

console.log("Descending:", descendingNumbers);
