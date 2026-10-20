// Day 050 - Transforming Arrays with map()

const favoriteArtists = [
    "Beirut",
    "Radiohead",
    "Coldplay",
    "The Strokes"
];

// Convert every artist name to uppercase
const uppercaseArtists = favoriteArtists.map(function (artist) {
    return artist.toUpperCase();
});

console.log("Original array:", favoriteArtists);
console.log("Uppercase array:", uppercaseArtists);

// Double every number
const numbers = [2, 4, 6, 8];

const doubledNumbers = numbers.map(function (number) {
    return number * 2;
});

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
