// Day 049 - Finding Array Elements

const favoriteArtists = [
    "Beirut",
    "Radiohead",
    "Coldplay",
    "The Strokes"
];

// 1. Check whether an artist exists
console.log(favoriteArtists.includes("Radiohead"));
console.log(favoriteArtists.includes("Taylor Swift"));

// 2. Find an artist's index
console.log(favoriteArtists.indexOf("Coldplay"));
console.log(favoriteArtists.indexOf("Taylor Swift"));

// 3. Use the result in a condition
if (favoriteArtists.includes("Beirut")) {
    console.log("Beirut is in your favorite artists!");
}
